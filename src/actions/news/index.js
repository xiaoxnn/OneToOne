
import  * as TYPES from '../ActionTypes'

let testUser={
    name:'xiaoming22',
    age:24
}



function initdata() {

    return (dispatch)=>{
        dispatch(initFinish());
    }
}

function doLogin  (){
    return (dispatch)=>{
        dispatch(isLogining(testUser));
        let rel=fetch('http://www.baidu.com').then((res)=>{
            dispatch(LoginSuccess(true,testUser));
        }).catch((e)=>{
            dispatch(LoginSuccess(false,testUser));
        })
    }
}



function initFinish() {
    return{
        'type':TYPES.Login_finish,
        loaded:true,
        user:testUser,
    }
}

function isLogining(testUser){
      return{
          'type':TYPES.Login_doing,
           user:testUser,

      }
}

function LoginSuccess(isSuccess,testUser){
    return {
        'type':TYPES.Login_finish,
        isSuccess:isSuccess,
        user:testUser,
        loaded:true,
    }
}



module.exports={
    doLogin,
    isLogining,
    LoginSuccess,
    initdata
}