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
    Alert
} from 'react-native';

var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import InitComponent from '../../common/InitComponent'
import {commonStyles} from '../../common/CommonStyles'
import CommonToolbar from '../../common/CommonToolbar'
import RefreshListView, {RefreshState} from '../../common/RefreshListView'

export default class Bottom extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            loaded: false,   //判断页面是否有数据
            empty: false,    //判断页面是否为空
            data: ['teaset']
        }
    }

    componentDidMount() {

    }

    pushback() {
        this.props.navigation.goBack();
    }


    render() {
        return (
            <View style={styles.contain}>
                <CommonToolbar title='我的' callback={this.pushback.bind(this)}/>
                <TouchableOpacity onPress={()=>  this.props.navigation.navigate('Teaset_Mune')}>
                    <View style={styles.item}>
                        <Text>teaset</Text>
                    </View>
                </TouchableOpacity>
                <View style={commonStyles.line}/>
                <View style={styles.item}>
                    <Text>teaset222</Text>
                </View>
                <View style={commonStyles.line}/>
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