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
    ScrollView,
    TouchableOpacity,
} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import  {commonStyles} from '../common/CommonStyles'
import {toast} from '../../utils'
export default class CustomDrawerContentComponent extends Component<{}> {

    _click(){
        toast.showLongCenter('点击侧滑了')
    }

    _close(){
        this.props.navigation.navigate('DrawerClose');
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View  style={styles.item}>
                        <Image source={require('../../image/user_image.png')}
                               style={styles.image} resizeMode={'contain'} />
                        <Text style={[commonStyles.Text_33_16,{marginLeft:10}]}>Hello</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this._click()}>
                    <View  style={styles.item}>
                        <Text style={[commonStyles.Text_33_16,{marginLeft:10}]}>侧滑</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._close()}>
                        <View  style={styles.item}>
                            <Text style={[commonStyles.Text_33_16,{marginLeft:10}]}>关闭</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    item:{
        height:deviceWidth*0.2,
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:deviceWidth*0.1,
        height:deviceWidth*0.1,
        marginLeft:10
    }

});
