import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    ToastAndroid,
    Alert,

} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import InitComponent from '../../common/InitComponent'
import {commonStyles} from '../../common/CommonStyles'
import CommonToolbar from '../../common/CommonToolbar'
import RefreshListView, {RefreshState} from '../../common/RefreshListView'
import {NavigationPage, Menu, Button, Theme} from 'teaset';
import  Teaset_Mune_item from './Teaset_Mune_item'
export default class Bottom extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            loaded: false,   //判断页面是否有数据
            empty: false,    //判断页面是否为空
            refreshState: RefreshState.Idle,
            data: ['teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset','teaset'],
            arrary222:[],
        }
    }

    componentDidMount() {

    }

    pushback() {
        this.props.navigation.goBack();
    }
    show(view, align) {
        view.measure((x, y, width, height, pageX, pageY) => {
            let items = [
                {title: 'Search', icon: 'none', onPress: () => alert('Search')},
                {title: 'Edit', icon:'none', onPress: () => alert('Edit')},
                {title: 'Remove', icon: 'none', onPress: () => alert('Remove')},
            ];
            Menu.show({x: pageX, y: pageY, width, height}, items, {align});
        });
    }

    _renderItem({item,index }){
        return (
               <Teaset_Mune_item />
        )
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
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='Teaset' callback={this.pushback.bind(this) }  />
                <RefreshListView
                    style={{marginTop:10}}
                    data={this.state.data}
                    renderItem={this._renderItem.bind(this)}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                    // 可选
                    footerRefreshingText= '玩命加载中 >.<'
                    footerFailureText = '我擦嘞，居然失败了 =.=!'
                    footerNoMoreDataText= '-我是有底线的-'
                    headerRefreshEnable={true}   //禁止头部刷新false
                    footerRefreshEnable={false}   //禁止底部加载false
                    itemSeparator={10}           //条目间距
                    refreshControlColor={['#06c1ae']}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },
    item: {
        width: deviceWidth,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }

});