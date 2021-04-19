import { initialColorsState } from "./initialStore";
import { actionTypes } from "../actions/actionTypes";

const colorReducer = (state = initialColorsState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default colorReducer;