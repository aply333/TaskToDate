import { actionTypes } from "./actionTypes";

export const moveMonthForward = (currMonth) => (dispatch) => {
  let newMonth = currMonth + 1;
  dispatch({ type: actionTypes.MOVE_MONTH_FORWARD, payload: newMonth });
};

export const moveMonthBakward = (currMonth) => (dispatch) => {
  let newMonth = currMonth - 1;
  dispatch({ type: actionTypes.MOVE_MONTH_BACKWARD, payload: newMonth });
};

export const updateMonthName = (newName) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_MONTH_NAME, payload: newName });
};

export const setPopAgendas = (agendas) => (dispatch) => {
  dispatch({ type: actionTypes.SET_POP_AGENDAS, payload: agendas });
};

export const setPopState = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_POP_STATE})
}