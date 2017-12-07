import React, {Component} from 'react';
import {AppRegistry, Text, FlatList, StyleSheet, Dimensions, View, TouchableOpacity, ToastAndroid} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {
    StackNavigator
}
    from 'react-navigation';
import News from './pages/Home/News'

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'


export default StackNavigatorHome =
    StackNavigator({
        News: {
                screen:
                News
            }
        }, {
            headerMode: 'screen',
            transitionConfig: () => ({
                // 只要修改最后的forVertical就可以实现不同的动画了。
                screenInterpolator: CardStackStyleInterpolator.forHorizontal,
            })
        }
    );

