import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import agendasReducer from "./agendaReducer";
import appReducer from "./appReducer";
import colorReducer from "./colorsReducer";
import taskReducer from "./tasksReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  colors: colorReducer,
  tasks: taskReducer,
  agendas: agendasReducer,
  appState: appReducer,
});

export default rootReducer;
