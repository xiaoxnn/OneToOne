import  {combineReducers} from 'redux'
import   VideoReducer from './VideoReducer'
import   NewsReducer from './NewsReducer'
const  RootReducers=combineReducers({
    VideoReducer,NewsReducer
});

export  default  RootReducers;