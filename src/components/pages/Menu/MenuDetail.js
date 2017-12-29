import React,{Component} from 'react';
import { AppRegistry ,Text,Alert,StyleSheet,Dimensions,View,TouchableOpacity,ToastAndroid,AsyncStorage} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import CommonStyles, {commonStyles} from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
import  Toast from 'react-native-toast-xn'
export  default  class  MenuDetail extends Component<{}>{



    constructor(props){
        super(props);
        this.state={
            loaded:false,   //判断页面是否有数据
            empty:false,    //判断页面是否为空
        }
    }

    componentDidMount() {

    }

    _click(){
        AsyncStorage.getItem('NewsKey')
            .then((value) => {
                this.props.navigation.goBack (value);
            })
            .catch((error) => {
                console.warn(error);
            }).done();

    }

    pushback() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='菜单' callback={this.pushback.bind(this) } leftIconVisiable={false}/>
                <TouchableOpacity onPress={()=>Toast.toast('hello')}>
                    <View style={styles.test}>
                        <Text style={commonStyles.Text_33_13}>跳转首页</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    test:{
        width:deviceWidth,
        height:40,
        justifyContent:'center',
        alignItems:'center',
    }
});