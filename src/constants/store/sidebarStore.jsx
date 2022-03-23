import { createStore, combineReducers } from "redux";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
    sidebarReducer
})

const Store = createStore(rootReducer);

export default Store;