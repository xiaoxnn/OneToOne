import React, {Component} from 'react';

import {
    StyleSheet,
    Dimensions
} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
export const commonStyles = StyleSheet.create({

    h_large:{
        height:deviceWidth*0.2,
        width:deviceWidth,
        marginLeft:10,
        marginRight:10,
    },
    h_middle:{
        height:deviceWidth*0.12,
        width:deviceWidth*0.96,

    },
    h_small:{
        height:deviceWidth*0.6,
        width:deviceWidth,
        marginLeft:10,
        marginRight:10,
    },
    image_small:{
       width:14,
       height:14,
    },
    bg_color:{
        color:"#f4f4f4"
    },

    bg_white_color:{
        backgroundColor:"#fff",
        width:deviceWidth,
        alignItems:'center'
    },

    TextSize12: {
        fontSize: 12
    },
    TextSize13: {
        fontSize: 13
    },
    TextSize14: {
        fontSize: 14
    },
    TextSize16: {
        fontSize: 16
    },
    Text_Bule_10: {
        fontSize: 10,
        color: '#29a7e1'
    },
    Text_Bule_12: {
        fontSize: 12,
        color: '#29a7e1'
    },
    Text_Bule_13: {
        fontSize: 13,
        color: '#29a7e1'
    },
    Text_Bule_14: {
        fontSize: 14,
        color: '#29a7e1'
    },
    Text_Bule_16: {
        fontSize: 16,
        color: '#29a7e1'
    },

    Text_white_10: {
        fontSize: 10,
        color: '#FFF'
    },
    Text_white_12: {
        fontSize: 12,
        color: '#FFF'
    },
    Text_white_13: {
        fontSize: 13,
        color: '#FFF'
    },
    Text_white_14: {
        fontSize: 14,
        color: '#FFF'
    },
    Text_white_16: {
        fontSize: 16,
        color: '#FFF'
    },
    Text_33_10: {
        fontSize: 10,
        color: '#333333'
    },
    Text_33_12: {
        fontSize: 12,
        color: '#333333'
    },
    Text_33_13: {
        fontSize: 13,
        color: '#333333'
    },
    Text_33_14: {
        fontSize: 14,
        color: '#333333'
    },
    Text_33_16: {
        fontSize: 16,
        color: '#333333'
    },

    Text_66_10: {
        fontSize: 10,
        color: '#666666'
    },
    Text_66_12: {
        fontSize: 12,
        color: '#666666'
    },
    Text_66_13: {
        fontSize: 13,
        color: '#666666'
    },
    Text_66_14: {
        fontSize: 14,
        color: '#666666'
    },
    Text_66_16: {
        fontSize: 16,
        color: '#666666'
    },
    Text_99_10: {
        fontSize: 10,
        color: '#999999'
    },
    Text_99_12: {
        fontSize: 12,
        color: '#999999'
    },
    Text_99_13: {
        fontSize: 13,
        color: '#999999'
    },
    Text_99_14: {
        fontSize: 14,
        color: '#999999'
    },
    Text_99_16: {
        fontSize: 16,
        color: '#999999'
    },
    Text_red_10: {
        fontSize: 10,
        color: '#e9424b'
    },
    Text_red_12: {
        fontSize: 12,
        color: '#e9424b'
    },
    Text_red_13: {
        fontSize: 13,
        color: '#e9424b'
    },
    Text_red_14: {
        fontSize: 14,
        color: '#e9424b'
    },
    Text_red_16: {
        fontSize: 16,
        color: '#e9424b'
    },
    line: {
        backgroundColor: '#F4F4F4',
        height: 0.5,
        width:deviceWidth*0.96
    }
});