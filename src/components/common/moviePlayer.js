/**
 * Created by guangqiang on 2017/9/7.
 */
import React, {Component} from 'react'
import {View, Text,Image, TouchableOpacity, Slider, ActivityIndicator, Modal, Platform,Dimensions,StyleSheet,StatusBar,BackHandler} from 'react-native'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'
import {formatTime} from '../../utils/formatTime'
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import  {toast} from '../../utils'
const playerHeight = 250
export default class MoviePlayer extends Component {

  constructor(props) {
    super(props)
    this.player = null
    this.state = {
      rate: 1,
      slideValue: 0.00,
      currentTime: 0.00,
      duration: 0.00,
      paused: false,
      isTouchedScreen: true,
      modalVisible: true,
      isLock: false
    }
  }

  componentWillMount() {
    const init = Orientation.getInitialOrientation()
    this.setState({
      init,
      orientation: init,
      specificOrientation: init,
    })
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation)
    Orientation.addSpecificOrientationListener(this._updateSpecificOrientation)
      if (Platform.OS === 'android') {
          BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
      }
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._updateOrientation)
    Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation)
      if (Platform.OS === 'android') {
          BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
      }
  }

    onBackAndroid = () => {
        if(this.state.orientation !== 'PORTRAIT'){
            Orientation.lockToPortrait()
            this.setState({
                isLock:false,
                orientation: this.state.orientation === 'PORTRAIT'?'LANDSCAPE':'PORTRAIT'
            })
            return true
        }
        return false
    };

  _updateOrientation(orientation){

      this.setState({ orientation:orientation })
  }
  _updateSpecificOrientation(specificOrientation){

      this.setState({ specificOrientation:specificOrientation })
  }

  loadStart(data) {
    console.log('loadStart', data)
  }

  setDuration(duration) {
    this.setState({duration: duration.duration})
  }

  setTime(data) {
    let sliderValue = parseInt(this.state.currentTime)
    this.setState({
      slideValue: sliderValue,
      currentTime: data.currentTime,
      modalVisible: false
    })
  }

  onEnd(data) {
    this.player.seek(0)
  }

  videoError(error) {
    this.showMessageBar('播放器报错啦！')(error.error.domain)('error')
    this.setState({
      modalVisible: false
    })
  }

  onBuffer(data) {
    console.log('onBuffer', data)
  }

  onTimedMetadata(data) {
    console.log('onTimedMetadata', data)
  }

  showMessageBar = title => msg => type => {
      toast.showLongCenter(msg);
  }

  play() {
    this.setState({
      paused: !this.state.paused,
    })
  }

  changeOrientation(){
      this.state.orientation === 'PORTRAIT'?Orientation.lockToLandscapeLeft():Orientation.lockToPortrait()
      this.setState({
            orientation: this.state.orientation === 'PORTRAIT'?'LANDSCAPE':'PORTRAIT'
      })
  }

  renderModal() {
    return (
      <Modal
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => alert("Modal has been closed.")}
      >
        <View style={styles.indicator}>
          <ActivityIndicator
            animating={true}
            style={[{height: 80}]}
            color={'#06c1ae'}
            size="large"
          />
        </View>
      </Modal>
    )
  }

  render() {
    const {orientation, isLock} = this.state
    const {url, title} =  this.props.navigation.state.params
    return (

      <TouchableOpacity
          disabled={this.state.isLock}
          activeOpacity={0.7}
          style={[styles.movieContainer, {height: orientation === 'PORTRAIT' ? playerHeight :deviceWidth,
          marginTop: orientation === 'PORTRAIT' ? Platform.OS === 'ios' ? 20 : 0 : 0}]}
        onPress={() => this.setState({isTouchedScreen: !this.state.isTouchedScreen})}>
        <Video source={{uri: url}}
               ref={ref => this.player = ref}
               rate={this.state.rate}
               volume={1.0}
               muted={false}
               paused={this.state.paused}
               resizeMode="cover"
               repeat={true}
               playInBackground={false}
               playWhenInactive={false}
               ignoreSilentSwitch={"ignore"}
               progressUpdateInterval={250.0}
               onLoadStart={(data) => this.loadStart(data)}
               onLoad={data => this.setDuration(data)}
               onProgress={(data) => this.setTime(data)}
               onEnd={(data) => this.onEnd(data)}
               onError={(data) => this.videoError(data)}
               onBuffer={(data) => this.onBuffer(data)}
               onTimedMetadata={(data) => this.onTimedMetadata(data)}
               style={[styles.videoPlayer]}
        />

          {  this.state.isTouchedScreen && !isLock ?
            <View style={styles.navContentStyle}>
              <View style={{flexDirection: 'row', alignItems:'center', flex: 1}}>
                <TouchableOpacity
                    disabled={this.state.isLock}
                  style={{backgroundColor:  'transparent'}}
                     onPress={()=>this.changeOrientation()}>
                  <Image source={require('../../image/back.png')}
                         style={styles.image}/>
                </TouchableOpacity>
                <Text style={{backgroundColor: 'transparent', color:'#fff', marginLeft: 10}}>{title}</Text>
              </View>
            </View>:
              <View style={{height:44}}/>
          }
        {
          orientation !== 'PORTRAIT' ?
            <TouchableOpacity
              style={{marginHorizontal: 10, backgroundColor:'transparent', width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => this.setState({isLock: !this.state.isLock})}
            >
              <Image source={ this.state.isLock ?require('../../image/lock.png'):require('../../image/unclok.png')}
                     style={styles.lockimag}/>
             </TouchableOpacity> : null
        }
        {
          this.state.isTouchedScreen && !isLock ?
            <View style={[styles.toolBarStyle]}>
              <TouchableOpacity onPress={() => this.play()}>
                <Image source={this.state.paused?require('../../image/start_play.png'):require('../../image/stop_play.png')}
                       style={styles.image}/>
              </TouchableOpacity>
              <View style={styles.progressStyle}>
                <Text style={styles.timeStyle}>{formatTime.formatMediaTime(Math.floor(this.state.currentTime))}</Text>
                <Slider
                  style={styles.slider}
                  value={this.state.slideValue}
                  maximumValue={this.state.duration}
                  minimumTrackTintColor={'#06c1ae'}
                  maximumTrackTintColor={'#989898'}
                  step={1}
                  onValueChange={value => this.setState({currentTime: value})}
                  onSlidingComplete={value => this.player.seek(value)}
                />
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 35}}>
                  <Text style={{color: '#fff', fontSize: 12}}>{formatTime.formatMediaTime(Math.floor(this.state.duration))}</Text>
                </View>
              </View>
              {
                orientation === 'PORTRAIT' ?
                  <TouchableOpacity onPress={()=>this.changeOrientation()}>
                    <Image source={require('../../image/pull_big.png')}
                           style={styles.image}/>
                  </TouchableOpacity> :
                  <TouchableOpacity onPress={()=>this.changeOrientation()}>
                    <Image source={require('../../image/pull_small.png')}
                           style={styles.image}/>
                  </TouchableOpacity>
              }
            </View> : <View style={{height: 40}}/>
        }
        {this.renderModal()}
          {  <StatusBar
              hidden={ this.state.orientation === 'PORTRAIT'?false:true }
          />}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  movieContainer: {
    justifyContent: 'space-between'
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  navContentStyle: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#000'
  },
  toolBarStyle: {
    backgroundColor:'#000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    marginTop: 10,
    height: 30
  },
  timeStyle: {
    width: 35,
    color: '#fff',
    fontSize: 12
  },
  slider: {
    flex: 1,
    marginHorizontal: 5,
    height: 20
  },
  progressStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10
  },
  indicator: {
    height: playerHeight,
    width: deviceWidth,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navToolBar: {
    backgroundColor: 'transparent',
    marginHorizontal: 5
  },
    lockimag:{
        width:26,
        height:26,
    },
    image:{
       width:15,
        height:15,
    }
    ,clear:{
        backgroundColor:'transparent'
    }
})