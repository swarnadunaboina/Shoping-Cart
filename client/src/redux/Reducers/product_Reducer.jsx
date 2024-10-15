const initialState = {
    productName: "All"
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case "display":
            return {...state, productName:action.payload};
        default:
            return state;
    }
}