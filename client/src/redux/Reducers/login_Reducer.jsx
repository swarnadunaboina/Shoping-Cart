const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
}
export default (state = initialState, action)=> {
    switch (action.type) {
        case "fnupdate":
            return { ...state, firstName: action.payload };
        case "lnupdate":
            return { ...state, lastName: action.payload };
        case "emailUpdate":
            return { ...state, email: action.payload };
        case "phoneNumber":
            return { ...state, phoneNumber: action.payload };
        case "passwordUpdate":
            return { ...state, password: action.payload };
        case "reset":
            return initialState;
        default:
            return state;
    }
}