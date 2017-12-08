import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,Alert} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
export  default  class  BottomOne extends Component<{}>{



    constructor(props){
        super(props);
        this.state={
            loaded:false,   //判断页面是否有数据
            empty:false,    //判断页面是否为空
        }
    }

    componentDidMount() {

    }

    pushback() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.contain}>
                <TouchableOpacity onPress={()=>toast.showShortCenter('hello')}>
                <Text>第一个页面</Text>
                </TouchableOpacity>
            </View>
           )
    }
}

const styles = StyleSheet.create({
    contain:{
             width:deviceWidth,
             height:deviceHeight,
             backgroundColor:'#fff',
             alignItems:'center'
    }


});