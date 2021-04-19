import { actionTypes } from "./actionTypes";
import { axiosAuth } from "../../components/auth/axiosAuth";

const rootUrl = "http://localhost:5000/protected/agenda";

export const fetchAgendas = (user_id) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_AGENDAS_START });
  axiosAuth()
    .get(`${rootUrl}/detailed/${user_id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_AGENDAS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_AGENDAS_FAIL, payload: err })
    );
};
