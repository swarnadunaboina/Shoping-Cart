import { createStore} from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./Reducers";
//import thunk from "redux-thunk";

const store = createStore(rootReducer);

export default store;