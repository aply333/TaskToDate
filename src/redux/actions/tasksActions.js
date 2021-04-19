import { actionTypes } from "./actionTypes";
import { axiosAuth } from "../../components/auth/axiosAuth";

const rootUrl = "http://localhost:5000/protected/tasks";

export const fetchTasks = (user_id) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TASKS_START });
  axiosAuth()
    .get(`${rootUrl}/detailed/${user_id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_TASKS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_TASKS_FAIL, payload: err })
    );
};

export const postTask = (task) => (dispatch) => {
  dispatch({ type: actionTypes.POST_TASK_START });
  axiosAuth()
    .post(`${rootUrl}/newTask`, task)
    .then((res) => {
      dispatch({
        type: actionTypes.POST_TASK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.POST_TASK_FAIL, payload: err })
    );
};
