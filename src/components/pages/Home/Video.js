import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,Alert} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360

export  default  class  BottomThree extends Component<{}>{



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
                <Text>第3个页面</Text>
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