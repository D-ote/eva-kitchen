import { SIGN_UP } from "../constants";

const initialState = {
    email: "",
    password: "",
    profile: null
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                profile: action.payload
            };
    
        default:
            return state;
    }
}

export default loginReducer;