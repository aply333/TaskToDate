import { actionTypes } from "../actions/actionTypes";
import { appInitialState } from "./initialStore";

const appReducer = ( state = appInitialState, action ) => {
    switch (action.type) {
        case actionTypes.MOVE_MONTH_BACKWARD:
        case actionTypes.MOVE_MONTH_FORWARD:
            return{
                ...state,
                monthDelta: action.payload,
            }
        case actionTypes.UPDATE_MONTH_NAME:
            return{
                ...state,
                month: action.payload
            }
        case actionTypes.SET_POP_AGENDAS:
            return{
                ...state,
                desktop:{
                    ...state.desktop,
                    popDate: action.payload.dateFormated,
                    popAgendas: action.payload.content
                }
            }
        case actionTypes.SET_POP_STATE:
            function stateToggle(currentState) {
                if(currentState===true){
                    return false
                }else{
                    return true
                }
            }
            return{
                ...state,
                desktop:{
                    ...state.desktop,
                    popState: stateToggle(state.desktop.popState)
                }
            }
        default: 
            return state
    }
}

export default appReducer