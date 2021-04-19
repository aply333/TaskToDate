import { initialAccountState } from "./initialStore";
import { actionTypes } from "../actions/actionTypes";

const accountReducer = ( state = initialAccountState, action ) => {
    switch (action.type) {
        case actionTypes.POST_REGISTER_START:
        case actionTypes.POST_LOGIN_START:
            return{
                ...state,
                accountFetch: true,
                accountError: ""
            }
        case actionTypes.POST_REGISTER_SUCCESS:
        case actionTypes.POST_LOGIN_SUCCESS:
            return{
                ...state,
                accountFetch: false,
                isLoggedIn: true,
                accountData:{
                    user_id: action.payload.user_id,
                    email: action.payload.email,
                    username: action.payload.username
                }
            }
        case actionTypes.POST_REGISTER_FAIL:
        case actionTypes.POST_LOGIN_FAIL:
            return{
                ...state,
                accountFetch: false,
                accountError: ""
            }
        default:
            return state
    }
}

export default accountReducer;