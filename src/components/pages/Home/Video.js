import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,Alert} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import  CommonStyles from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
import RefreshListView,{RefreshState}  from '../../common/RefreshListView'

export  default  class  BottomThree extends Component<{}>{

    constructor(props){
        super(props);
        this.state={
            loaded:true,   //判断页面是否有数据
            empty:false,    //判断页面是否为空
        }
    }

    componentDidMount() {

    }

    _palyVideo(){
        const { navigate } = this.props.navigation;
        navigate('MoviePlayer',{
            title:'hoooolwooooood',
            url:'http://tb-video.bdstatic.com/tieba-smallvideo-transcode/14103864_1a3a176c4d11f22b6a860f6d00f99693_1.mp4',
        });
    }

    pushback() {
        this.props.navigation.goBack();
    }


    Refresh(){

    }

    render(){
        if(!this.state.loaded){
            return (
                <View style={styles.contain}>
                    <CommonToolbar   title='视频' callback={this.pushback.bind(this) }   rightIconVisiable={false}/>
                    <InitComponent   refresh={this.Refresh.bind(this) }again={this.state.loaded}  empty={this.state.empty} connectfail={this.state.connectfail}/>
                </View>
            )
        }
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='视频' callback={this.pushback.bind(this) } />
                <View style={{width:deviceWidth,height:30,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>this._palyVideo()}>
                       <Text style={{backgroundColor:'#f00'}}>play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
             width:deviceWidth,
             height:deviceHeight,
             backgroundColor:'#fff',
             alignItems:'center'
    }

});