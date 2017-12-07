
import * as TYPES  from './../actions/ActionTypes';

const initialstate={
    status:'init',
    isSuccess:false,
    user:null,
    loaded:false,
}

export  default function  LoginIn(state=initialstate,action){

    switch (action.type){
        case TYPES.Login_in:
            return Object.assign({},state,{
                status:'init',
                isSuccess:false,
                user:null,
                loaded:false,
            })
        case TYPES.Login_doing:
            return Object.assign({},state,{
                status:'doing',
                isSuccess:false,
                user:action.user,
            })
        case TYPES.Login_finish:
            return Object.assign({},state,{
                status:'finish',
                isSuccess:action.isSuccess,
                user:action.user,
                loaded:true
            })
        default:
            return state;
    }
}
