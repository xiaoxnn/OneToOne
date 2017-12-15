import React,{Component} from 'react';
import { Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,StatusBar,BackHandler,Platform} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import  CommonStyles from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
import RefreshListView,{RefreshState}  from '../../common/RefreshListView'
import {connect} from 'react-redux';
import {getPicture}  from '../../../actions/news'
export   class  News extends Component<{}>{



    componentDidMount() {
        this.props.dispatch(getPicture(this.props.page,this.props.size,RefreshState.Idle));
    }

    pushback() {
        this.props.navigation.goBack();
    }

    Refresh(){

    }
    /**
     *头部刷新
     */
    onHeaderRefresh = () => {
        this.props.dispatch(getPicture(-1,this.props.size,RefreshState.HeaderRefreshing));
    }

    /**
     *  脚部加载更多
     */
    onFooterRefresh = () => {
        this.props.dispatch(getPicture(this.props.page,this.props.size,RefreshState.FooterRefreshing));
    }

    _renderItem({item,index }){
        return (
            <View>
                <Text>{index}</Text>
            </View>
        )
    }

    render(){
        let {data,loaded,empty,connectfail,refreshState}= this.props
        if(!loaded){
            return (
                <View style={styles.contain}>
                    <StatusBar
                        hidden={false}
                        backgroundColor={"#06c1ae"}
                    />
                    <CommonToolbar   title='新闻' callback={this.pushback.bind(this) }   rightIconVisiable={false}/>
                    <InitComponent   refresh={this.Refresh.bind(this) }again={loaded}  empty={empty} connectfail={connectfail}/>
                </View>
            )
        }
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='新闻' callback={this.pushback.bind(this) }leftIconVisiable={false} />
                <RefreshListView
                    style={{marginTop:10}}
                    data={data}
                    renderItem={this._renderItem.bind(this)}
                    refreshState={refreshState}
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


function select(store){
    return {
        page:store.VideoReducer.page,
        size:store.VideoReducer.size,
        data: store.VideoReducer.dataSource,
        loaded:store.VideoReducer.loaded,   //判断页面是否有数据
        empty:store.VideoReducer.empty,     //判断页面是否为空
        connectfail:store.VideoReducer.connectfail,  //初始化连接服务器失败
        refreshState: store.VideoReducer.refreshState,
    }
}


export default connect(select)(News);