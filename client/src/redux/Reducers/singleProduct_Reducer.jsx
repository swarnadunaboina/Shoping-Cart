const initialState = {
    singleItem:{}
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case 'singleItem':
            return { ...state, singleItem: action.payload};
        default:
            return state;
    }
}