/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
export default class Launch extends Component<{}> {

    componentDidMount() {
        const { navigate } = this.props.navigation;
        this.fristTime= setTimeout(() => {
            navigate('Tab')
        }, 2000)
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        this.fristTime && clearTimeout( this.fristTime);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                />
                <Image source={require('./../../image/Launch.jpg')}
                       style={styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
    ,image:{
       width:deviceWidth,
        height:deviceHeight
    }
});
