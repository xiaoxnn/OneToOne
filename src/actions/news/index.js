
import  * as TYPES from '../ActionTypes'
function getPicture(pn,rn,type){
    return (dispatch)=>{
        dispatch(refreshState(type))
        var uu="http://image.baidu.com/search/index?tn=resultjson&ie=utf-8&word=%E5%B7%B4%E9%BB%8E%E8%BF%AA%E6%96%AF%E5%B0%BC"+"&pn="+pn+"&rn="+rn;
        fetch(uu)
            .then((response) => response.json())
            .then((responseData) => {
                if(responseData.data.length!=0){
                    dispatch(LoadSuccess(responseData.data,type));
                }else{
                    dispatch(loadSuccessEmpty());
                }
            })
            .catch((error) => {
                dispatch(LoadFail());
            })
            .done();
    }
}


function refreshState(state) {
    return{
        'type':TYPES.refresh_state,
        state:state
    }
}

function LoadSuccess(data,state){
    return{
        'type':TYPES.load_success_video,
        data:data,
        loaded:true,
        state:state
    }
}

function loadSuccessEmpty() {
    return{
        'type':TYPES.load_success_empty,
    }
}

function LoadFail(){
    return{
        'type':TYPES.load_fail_video,
    }
}

module.exports={
    getPicture,
}