'use strict'
import React, {Component} from 'react';
import{
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    NetInfo,
    Modal,
    ActivityIndicator,
} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
export default class CommonToolbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            leftIconVisiable:false,
            rightIconVisiable:false,
            netIsConnected:true,
            transparent: true,
            modalVisible: false,
        };
        this._handleConnectivityChange=this._handleConnectivityChange.bind(this)
    }

    /**
     *网络变化监听
     */
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
    }


    /**
     * 移除网络变化监听
     */
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
    }

    /**
     * 网络变化处理
     * @param isConnected
     * @private
     */
    _handleConnectivityChange(isConnected) {
        this.state.netIsConnected=isConnected;
    }

    /**
     *
     被父控组调用显示是否操作进行中提示
     * @param visible
     * @private
     */
    setInitModalVisible(visible) {
        console.log("visible"+visible);
        this.setState({modalVisible: visible});
    }

    /**
     * 左边点击回调
     */
    pushback() {
        this.props.callback();
    }

    /**
     * 右边点击回调
     */
    rightCall(){
        this.props.callRight();
    }

    /**
     * Modal的用处：当用户操作页面请求后台数据提示框
     * @returns {XML}
     */
    render() {

        if(this.props.leftIconVisiable==undefined){
            this.state.leftIconVisiable=true
        }else{
            this.state.leftIconVisiable=false
        }
        if(this.props.rightIconVisiable==undefined){
            this.state.rightIconVisiable=true
        }else{
            this.state.rightIconVisiable=false
        }
        var {
            rightStyle,
        } = this.props;
        return (
            <View style={styles.toolBarContainer}>

                <Modal
                    animationType='fade'
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>

                    <View style={styles.contain}>
                        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#DDD',padding:8,borderRadius:8}}>
                            <ActivityIndicator
                                style={[styles.centering, styles.gray]}
                                color="#f00"
                                size="small"
                            />
                            <Text>  进行中...</Text>
                        </View>
                    </View>
                </Modal>
                    { this.state.leftIconVisiable?
                        <View style={styles.toolbarLeft}/>:
                        <TouchableOpacity onPress={() => this.pushback()}>
                            <View style={styles.toolbarLeft}>
                                <Image source={require('../../image/back_touzhi.png')}
                                       style={{width: 9, height: 16}}/>
                            </View>
                        </TouchableOpacity>
                     }
                     <View style={styles.toolbarzhong}>
                          <Text style={styles.toolbarTextnext}>{this.props.title}</Text>
                     </View>
                    {
                        this.state.rightIconVisiable?
                        <View style={styles.toolbarright}/>:
                            <TouchableOpacity onPress={() => this.rightCall()}>
                                    <View style={styles.toolbarright}>
                                        <Text    style={[styles.toolbarTextRight,rightStyle]}>{this.props.right}</Text>
                                    </View>
                            </TouchableOpacity>
                    }



            </View>

        )
    }
}

const styles = StyleSheet.create({
    toolBarContainer: {
        width: deviceWidth,
        height: deviceWidth * 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#06c1ae",
        justifyContent: 'center',
    },
    toolbarLeft: {
        paddingLeft:deviceWidth*0.03,
        width: deviceWidth * 0.283,
        height: deviceWidth * 0.0944,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    toolbarzhong: {
        width: deviceWidth * 0.433,
        height: deviceWidth * 0.0944,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbarright: {
        width: deviceWidth * 0.283,
        height: deviceWidth * 0.0944,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight:deviceWidth*0.04,
    },
    toolbarTextnext: {
        fontSize: deviceWidth * 0.0416,
        color: "#fff",
        marginLeft: 5
    },
    toolbarTextRight: {
        fontSize: deviceWidth * 0.0416,
        color: "#aaa",
        marginLeft: 5
    },
    contain:{
        width:deviceWidth,
        height:deviceHeight,
        justifyContent:'center',
        alignItems:'center'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
});
