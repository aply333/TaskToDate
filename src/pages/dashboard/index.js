import React from "react";
import { connect } from "react-redux";
import PopUp from "../../components/popContent/popUp";
import CalendarPane from "./calendar";
import AgendaPop from "./calendar/ agendaPop";
import ToDoList from "./todoList";

function Dashboard({ colors, popState, popDate, popAgendas }) {
  const dashBounds = {
    position: "absolute",
    width: "95%",
    height: "95%",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
    display: "flex",
  };

  return (
    <>
      <PopUp trigger={popState} color="white" dropColor={colors[1].colorhex}>
        <AgendaPop
          color={colors[2].colorhex}
          popDate={popDate}
          popAgendas={popAgendas}
        />
      </PopUp>
      <div style={dashBounds}>
        <ToDoList />
        <CalendarPane />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors.colors,
    popState: state.appState.desktop.popState,
    popDate: state.appState.desktop.popDate,
    popAgendas: state.appState.desktop.popAgendas,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
