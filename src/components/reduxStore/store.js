import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { getStorage, setStorage } from "../../utils/storage";
import { rootReducer } from "./reducer/rootReducer";

const store = () =>{
    const initialState = getStorage('eva-kitchen')
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        const storeData = (store) => (next)=>(action)=>{
            const saveData = store.getState();
            setStorage('eva-kitchen',saveData)
            return next(action)
        }
        return createStore(rootReducer, initialState, applyMiddleware(thunk, storeData))
}

export default store();