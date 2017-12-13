import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,Image} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import  {commonStyles} from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
import RefreshListView,{RefreshState}  from '../../common/RefreshListView'
import {connect} from 'react-redux';
import {getVideo}  from '../../../actions/videos'
export  class  Video extends Component<{}>{


    componentDidMount() {
        this.props.dispatch(getVideo(this.props.page,this.props.size,RefreshState.Idle));
    }

    _palyVideo(title,url){
        const { navigate } = this.props.navigation;
        navigate('MoviePlayer',{
            title:title,
            url:url,
        });
    }

    pushback() {
        this.props.navigation.goBack();
    }


    Refresh(){
        this.props.dispatch(getVideo(this.props.page,this.props.size,RefreshState.FooterRefreshing));
    }

    _renderItem({item,index }){
        return (
            <TouchableOpacity onPress={()=>this._palyVideo(item.group.text,item.group["720p_video"].url_list[0].url)}>
                <View style={{width:deviceWidth,justifyContent:'center'}}>
                    <View style={styles.itemTitle}>
                        <Image   source={{uri: item.group.user.avatar_url}}
                                  style={styles.userimage}/>
                        <Text style={[commonStyles.Text_66_14,{marginLeft:6}]}>{item.group.user.name}</Text>
                    </View>
                    <Text style={[commonStyles.Text_99_13,{marginTop:4,marginLeft:10,width:deviceWidth}]}>{item.group.text}</Text>
                    <Image   source={{uri: item.group.medium_cover.url_list[2].url}}
                             style={{width:item.group.video_width/2.25,height:item.group.video_height/2.25}}resizeMode={'contain'} />
                </View>
            </TouchableOpacity>
        )
    }
    /**
     *头部刷新
     */
    onHeaderRefresh = () => {
        this.props.dispatch(getVideo(-1,this.props.size,RefreshState.HeaderRefreshing));
    }

    /**
     *  脚部加载更多
     */
    onFooterRefresh = () => {
        this.props.dispatch(getVideo(this.props.page,this.props.size,RefreshState.FooterRefreshing));
    }

    render(){
        let {data,loaded,empty,connectfail,refreshState}= this.props
        if(!loaded){
            return (
                <View style={styles.contain}>
                    <CommonToolbar   title='视频' callback={this.pushback.bind(this) }   rightIconVisiable={false}/>
                    <InitComponent   refresh={this.Refresh.bind(this) }again={loaded}  empty={empty} connectfail={connectfail}/>
                </View>
            )
        }
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='视频' callback={this.pushback.bind(this) } />
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
                    refreshControlColor={['#06c1ae']}
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
    ,itemTitle:{
        width:deviceWidth,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    userimage:{
        marginLeft:5,
        width: 24,
        height: 24,
        borderRadius:12
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


export default connect(select)(Video);