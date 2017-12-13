
import  * as TYPES from '../ActionTypes'
function getVideo(message_cursor,count,type){
    return (dispatch)=>{
           dispatch(refreshState(type))
            var uu="http://iu.snssdk.com/neihan/stream/mix/v1/?mpic=1&webp=1&essence=1&video_cdn_first=1&content_type=-104"+"&message_cursor="+message_cursor+"&count="+count;
            fetch(uu)
                .then((response) => response.json())
                .then((responseData) => {
                    if(responseData.message=='success'){
                        dispatch(LoadSuccess(responseData.data.data,type));
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
    getVideo,
}