import { initialTaskState } from "./initialStore";
import { actionTypes } from "../actions/actionTypes";

const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_START:
      return {
        ...state,
        taskFetch: true,
        taskError: "",
      };
    case actionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        taskFetch: false,
        tasks: action.payload,
      };
    case actionTypes.FETCH_TASKS_FAIL:
      return {
        ...state,
        taskFetch: false,
        taskError: action.payload,
      };
    case actionTypes.POST_TASK_START:
      return {
        ...state,
        taskPost: true,
        taskError: "",
      };
    case actionTypes.POST_TASK_SUCCESS:
      return {
        ...state,
        taskPost: false,
        tasks: action.payload,
      };
    case actionTypes.POST_TASK_FAIL:
      return {
        ...state,
        taskPost: false,
        taskError: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
