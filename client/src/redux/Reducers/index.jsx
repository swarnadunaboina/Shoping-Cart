import  loginReducer  from './login_Reducer';
import  cartReducer from './cart_Reducer'
import productReducer from './product_Reducer'
import singleProduct_Reducer from './singleProduct_Reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
    product: productReducer,
    single: singleProduct_Reducer
});

export default rootReducer;