import React, {Component} from 'react';

import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import Tab from './pages/Home/Tab'
import News from './pages/Home/News'
import Launch from './pages/Launch'
import Menu from './pages/Home/Menu'
import Video from './pages/Home/Video'
import My from './pages/Home/My'
import MoviePlayer from './common/MoviePlayer'
import NavigatorHome from './pages/NavigatorHome'
import MenuDetail from './pages/Menu/MenuDetail'
import Teaset_Mune from './pages/My/Teaset_Mune'

export default StackNavigatorHome =
    StackNavigator({
            Launch: {
                screen:
                Launch
            },
            Tab: {
                screen:
                Tab
            },
            NavigatorHome: {
                screen:
                NavigatorHome
            }
            ,
            News: {
                screen:
                News
            }
            ,
            Menu: {
                screen:
                Menu
            },
            Video: {
                screen:
                Video
            },
            My: {
                screen:
                My
            },
            MoviePlayer: {
                screen:
                MoviePlayer
            },
            MenuDetail: {
                screen:
                MenuDetail
            },
            Teaset_Mune: {
                screen:
                Teaset_Mune
            }
        }, {
            headerMode: 'noon',// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
            transitionConfig: () => ({
                // 只要修改最后的forVertical就可以实现不同的动画了。
                screenInterpolator: CardStackStyleInterpolator.forHorizontal,
            })
        }
    );

