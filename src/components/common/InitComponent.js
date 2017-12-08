import React,{Component} from 'react';
import { Text,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,NetInfo,ActivityIndicator,Image} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
export  default  class  InitComponent extends Component<{}>{

    constructor(props){
        super(props);
        this.state = {
            HadNet:true,    //判断有没有网络
            empty:false,    //初始化页面没有数据
            connectfail:false, //初始化连接服务器失败
            _isMounted:true,  //防止组件被卸载调用setState方法
        };
    }

    componentDidMount(){
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                if(this.state._isMounted){
                    this.setState({
                        HadNet:isConnected,
                    })
                }
            }
        );
    }

    componentWillUnmount() {
        this.state._isMounted = false
    }

    componentWillMount(){

    }

    componentWillReceiveProps(){
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                console.log("empty"+this.props.empty  +"loaded"+this.props.again+"connectfail"+this.props.connectfail);
                if(this.state._isMounted) {
                    this.setState({
                        HadNet: isConnected,
                        empty: this.props.empty,
                        connectfail:this.props.connectfail,
                    })
                }
            }
        );
    }


    /**
     *  通知界面刷新
     */
     refresh(){
         NetInfo.isConnected.fetch().done(
             (isConnected) => {
                 if(isConnected){
                     console.log(""+this.props.refresh);
                     if(this.props.refresh==undefined){
                         ToastAndroid.showWithGravity('没有添加回调函数!',ToastAndroid.CENTER,ToastAndroid.SHORT)
                     }else{
                         this.props.refresh();
                         this.setState({
                             HadNet:isConnected,
                             empty:false,
                             connectfail:false,
                         })
                     }
                 }else{
                     ToastAndroid.showWithGravity('亲,请检查网络!',ToastAndroid.CENTER,ToastAndroid.SHORT)
                 }
             }
         );
    }

    /**
     *  页面初始化没有网络界面
     */
    HadNetView(){
        return (
            <View style={styles.contain}>
                <TouchableOpacity onPress={()=>this.refresh()}>
                    <View style={styles.containCenter}>
                              <Image source={require('../../image/no_net.png')}
                                     style={styles.emptyView} resizeMode={'contain'} />
                             <Text style={{color:'#999',marginTop:4}}>网络异常</Text>
                              <View style={{borderWidth:1,borderColor:'#999',borderRadius:13,height:26,justifyContent:'center',marginTop:10}}>
                                  <Text  style={{color:'#999',marginLeft:18,marginRight:18}}> 点击重试</Text>
                              </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    /**
     *  页面初始化没有网络界面
     */
    ConnectServerFailView(){
        return (
            <View style={styles.contain}>
                <TouchableOpacity onPress={()=>this.refresh()}>
                    <View style={styles.containCenter}>
                        <Image source={require('../../image/connect_server_fail.png')}
                               style={styles.emptyView} resizeMode={'contain'} />
                        <Text style={{color:'#999',marginTop:4}}>连接服务器失败</Text>
                        <View style={{borderWidth:1,borderColor:'#999',borderRadius:13,height:26,justifyContent:'center',marginTop:10}}>
                            <Text  style={{color:'#999',marginLeft:18,marginRight:18}}> 点击重试</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 初始化没有数据空页面
     * @returns {XML}
     */
    emptyView(){
        return (
            <View style={styles.contain}>
                    <Image source={require('../../image/empty_data.png')}
                           style={styles.emptyView} resizeMode={'contain'} />
                <Text style={{color:'#999',marginTop:20,fontSize:16}} >这儿是空的,<Text style={{fontSize:14}}>   空的,<Text style={{fontSize:10}}>   空的</Text></Text>...</Text>
            </View>

        )
    }

    /**
     *  正在加载中界面
     */
    LoadingView() {
        return (
            <View style={styles.contain}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#DDD',padding:8,borderRadius:8}}>
                        <ActivityIndicator
                            style={[styles.centering, styles.gray]}
                            color="#06c1ae"
                            size="small"
                        />
                    <Text>正在加载...</Text>
                </View>
            </View>
        )
    }
    render(){


        if(!this.state.HadNet){
            return  this.HadNetView()
        }
        if(this.state.connectfail){
            return this.ConnectServerFailView()
        }
        if(this.state.HadNet&&!this.state.empty){
           return this.LoadingView()
        }
        if(this.state.empty){
            return this.emptyView()
        }

    }
}


const styles = StyleSheet.create({
     contain:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
     },
     containCenter:{
         justifyContent:'center',
         alignItems:'center',
     },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
    ,emptyView:{
         width:deviceWidth*0.7,
         height:deviceWidth*0.26,
    }
});