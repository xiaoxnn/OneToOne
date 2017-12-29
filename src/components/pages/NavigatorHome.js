import React,{Component} from 'react';
import {StackNavigator,TabNavigator,DrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import {StatusBar,View,ScrollView,Text,StyleSheet,Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;//360
import Tab from './Home/Tab'
import Menu from './Home/Menu'
import News from './Home/News'
import MenuDetail  from './Menu/MenuDetail'

import CustomDrawerContentComponent  from './CustomDrawerContentComponent'
export default class NavigatorHome extends  Component<{}> {

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    hidden={false}
                    backgroundColor={"#06c1ae"}
                />
                <Navigator />
            </View>
        );
    }
}

export const Navigator = DrawerNavigator({
    Home:{screen:News},

},{
    drawerWidth: deviceWidth*0.66, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey : 'Notifications',
        labelStyle : {//标签样式
            // color : 'red',
            height : 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },

    },

});
