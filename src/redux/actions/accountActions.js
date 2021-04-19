import { actionTypes } from "./actionTypes";
import axios from "axios";

const rootUrl = "http://localhost:5000";

export const loginAction = (credentials) => (dispatch) => {
  dispatch({ type: actionTypes.POST_LOGIN_START });
  axios
    .post(`${rootUrl}/auth/login`, credentials)
    .then((res) => {
      if(res.data.token){
      sessionStorage.setItem("token", res.data.token)};
      dispatch({
        type: actionTypes.POST_LOGIN_SUCCESS,
        payload: res.data.user,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.POST_LOGIN_FAIL, payload: err })
    );
};

export const registerAction = (newUser) => (dispatch) => {
  console.log(newUser)
  dispatch({ type: actionTypes.POST_REGISTER_START });
  axios
    .post(`${rootUrl}/auth/register`, newUser)
    .then((res) => {
      if(res.data.token){
      sessionStorage.setItem("token", res.data.token)};
      dispatch({
        type: actionTypes.POST_REGISTER_SUCCESS,
        payload: res.data.user,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.POST_REGISTER_FAIL, payload: err })
    );
};
