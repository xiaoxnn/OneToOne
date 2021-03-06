import React,{Component} from 'react';
import { AppRegistry ,Text,FlatList,StyleSheet,Dimensions,View,TouchableOpacity,AsyncStorage,Alert} from 'react-native';
var deviceHeight = Dimensions.get('window').height;//640
var deviceWidth = Dimensions.get('window').width;//360
import {toast}  from '../../../utils'
import  InitComponent from '../../common/InitComponent'
import CommonStyles, {commonStyles} from '../../common/CommonStyles'
import  CommonToolbar from '../../common/CommonToolbar'
export  default  class  Menu extends Component<{}>{



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
        AsyncStorage.setItem('NewsKey',this.props.navigation.state.key)
        this.props.navigation.navigate('MenuDetail');
    }

    pushback() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.contain}>
                <CommonToolbar   title='新闻' callback={this.pushback.bind(this) } />
                <TouchableOpacity onPress={()=>this._click()}>
                    <View style={styles.test}>
                        <Text style={commonStyles.Text_33_13}>跳转</Text>
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