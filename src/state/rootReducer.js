import { combineReducers } from "redux";
import dataReducer from './data/dataReducer';

const createRootReducer=()=>{
return combineReducers({data:dataReducer})
}
export default createRootReducer;