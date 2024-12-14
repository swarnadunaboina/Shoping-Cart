const initialState = {
    cartCount: 0,
    cartItem:[],
    cartPrice:0,
    itemSize: " "
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case 'add':
            return { ...state, cartCount: state.cartCount + 1 };
        case 'remove':
            return { ...state, cartCount: state.cartCount - 1 };
        case 'cartItem':
            var cartItemsList = state.cartItem
            cartItemsList.push(action.payload)
            console.log("action.payload",action.payload)
            const cartTotalPrice =state.cartPrice + parseFloat(action.payload.price.replaceAll(',', ''));
            return {...state, cartItem:cartItemsList, cartPrice : cartTotalPrice};
        // case 'addQty' :
        //     var cartItemsList = state.cartItem.price
        //     cartItemsList.push(action.payload.price + parseFloat(action.payload.price.replaceAll(',', '')))
        //     return {...state, cartQty: state.cartQty + 1};
        // case 'minusQty' :
        //     return {...state, cartQty: state.cartQty - 1};
        case 'itemSize':
            console.log("reducersize",action.payload)
            return {...state, itemSize:action.payload};
        default:
            return state;
    }
}
