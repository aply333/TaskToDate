import { initialAgendasState } from "./initialStore";
import { actionTypes } from "../actions/actionTypes";

const agendasReducer = (state = initialAgendasState, action) => {
    switch(action.type){
        case actionTypes.FETCH_AGENDAS_START:
            return{
                ...state,
                agendasFetch: true,
                agendasError: ""
            }
        case actionTypes.FETCH_AGENDAS_SUCCESS:
            return{
                ...state,
                agendasError: false,
                agendas: action.payload
            }
        case actionTypes.FETCH_COLORS_FAIL:
            return{
                ...state,
                agendasFetch: false,
                agendasError: action.payload
            }
        default:
            return state
    }
}

export default agendasReducer;