import React,{Component} from 'react';
import { Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,StatusBar,BackHandler,Platform} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import  CommonStyles from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
import RefreshListView,{RefreshState}  from '../../common/RefreshListView'
export  default  class  BottomOne extends Component<{}>{
    constructor(props){
        super(props);
        this.state={
            loaded:false,   //判断页面是否有数据
            empty:false,    //判断页面是否为空
            connectfail:false,  //初始化连接服务器失败
            dataSource:[],
            refreshState: RefreshState.Idle,
        }
    }

    componentWillMount(){
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount(){
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        return false
    };

    pushback() {
        this.props.navigation.goBack();
    }

    Refresh(){

    }
    /**
     *头部刷新
     */
    onHeaderRefresh = () => {

    }

    /**
     *  脚部加载更多
     */
    onFooterRefresh = () => {

    }
    render(){
        if(!this.state.loaded){
            return (
                <View style={styles.contain}>
                    <StatusBar
                        hidden={false}
                        backgroundColor={"#06c1ae"}
                    />
                    <CommonToolbar   title='新闻' callback={this.pushback.bind(this) }   rightIconVisiable={false}/>
                    <InitComponent   refresh={this.Refresh.bind(this) }again={this.state.loaded}  empty={this.state.empty} connectfail={this.state.connectfail}/>
                </View>
            )
        }
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='新闻' callback={this.pushback.bind(this) }leftIconVisiable={false} />
                <RefreshListView
                    style={{marginTop:10}}
                    data={this.state.dataSource}
                    renderItem={this._renderItem.bind(this)}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                    // 可选
                    footerRefreshingText= '玩命加载中 >.<'
                    footerFailureText = '我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText= '-我是有底线的-'
                    headerRefreshEnable={true}   //禁止头部刷新false
                    footerRefreshEnable={true}   //禁止底部加载false
                    itemSeparator={10}           //条目间距
                />
            </View>
           )
    }
}


const styles = StyleSheet.create({
    contain:{
             flex:1,
             backgroundColor:'#fff',
             alignItems:'center'
    }


});