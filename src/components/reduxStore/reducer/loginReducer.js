import { PROFILE, IS_AUTHENTICATED } from "../constants";

const initialState = {
    isAuthenticated:false,
    profile: null
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated:action.payload,
            };
            case PROFILE:
                return {
                    ...state,
                    profile: action.payload
                };
        default:
            return state;
    }
}

export default authReducer;