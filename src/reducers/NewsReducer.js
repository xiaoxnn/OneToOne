
import * as TYPES  from './../actions/ActionTypes';
import {RefreshState}  from '../components/common/RefreshListView'
const initialstate={
    status:'init',
    dataSource:[],
    page:1,
    size:20,
    loaded:false,   //判断页面是否有数据
    empty:false,    //判断页面是否为空
    connectfail:false,  //初始化连接服务器失败
    refreshState: RefreshState.Idle,
}

export  default function  getData(state=initialstate,action){

    switch (action.type){

        case TYPES.load_success_news:
            return Object.assign({},state,{
                loaded:action.loaded,
                dataSource:action.state==RefreshState.Idle||action.state==RefreshState.HeaderRefreshing?action.data:state.dataSource.concat(action.data),
                page:action.state==RefreshState.Idle||action.state==RefreshState.FooterRefreshing?state.page+1:1,
                refreshState: RefreshState.Idle,
            })

        case TYPES.load_success_empty_news:
            return Object.assign({},state,{
                empty:true,
            })

        case TYPES.load_fail_news:
            return Object.assign({},state,{
                refreshState: RefreshState.Failure,
                connectfail:true,
            })

        case TYPES.refresh_state_news:
            return Object.assign({},state,{
                refreshState:action.state,
            })
        default:
            return state;
    }
}
