import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import { TabNavigator ,TabBarBottom}
    from 'react-navigation';
import  TabBarItem from './../../common/TabBarItem'
import News  from './News'
import Menu  from './Menu'
import Video  from './Video'
import My  from './My'
import  NavigatorHome from '../NavigatorHome'
export default Tab = TabNavigator(
    {

        NavigatorHome:{
            screen:NavigatorHome,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'首页',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../../image/news_2.png')}
                        selectedImage={require('../../../image/news_1.png')}
                    />
                )
            }),
        },
        // News:{
        //     screen:News,
        //     navigationOptions:({navigation}) => ({
        //         tabBarLabel:'首页',
        //         tabBarIcon:({focused,tintColor}) => (
        //             <TabBarItem
        //                 tintColor={tintColor}
        //                 focused={focused}
        //                 normalImage={require('../../../image/news_2.png')}
        //                 selectedImage={require('../../../image/news_1.png')}
        //             />
        //         )
        //     }),
        // },
        Menu:{
            screen:Menu,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'菜谱',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../../image/menu_2.png')}
                        selectedImage={require('../../../image/menu_1.png')}
                    />
                )
            }),
        },
        Video:{
            screen:Video,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'视频',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../../image/video_2.png')}
                        selectedImage={require('../../../image/video_1.png')}
                    />
                )
            }),
        },
        My:{
            screen:My,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../../../image/my_2.png')}
                        selectedImage={require('../../../image/my_1.png')}
                    />
                )
            }),
        }


    },

    {
        mode: 'card',
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled: false, // 是否可以左右滑动切换tab
        animationEnabled: false, // 切换页面时是否有动画效果
        lazy:true,
        // backBehavior: 'none',  按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions:{
            activeTintColor:'#06c1ae',
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        }

    }

);

