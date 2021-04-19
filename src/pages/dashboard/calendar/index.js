import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ButtonText } from "../../../components/buttons/Button";
import Calendar from "../../../components/calendar/calendar";
import Container from "../../../components/conainter/Contianer";
import { Colors } from "../../../db_placeholder/tempColors";
import {
  topHalfStyles,
  weekDayDiv,
  calBoundaries,
  weekDays,
} from "./calendarConst";
import MonthHeader from "./monthHeader";
import {
  moveMonthForward,
  moveMonthBakward,
  updateMonthName,
  fetchAgendas,
  setPopState,
  setPopAgendas
} from "../../../redux/actions";

function CalendarPane({
  month,
  delta,
  moveMonthForward,
  moveMonthBakward,
  updateMonthName,
  fetchAgendas,
  userId,
  isFetch,
  agendas,
  setPopState,
  setPopAgendas
}) {

  const clickForward = () => {
    moveMonthForward(delta);
  };

  const clickBackward = () => {
    moveMonthBakward(delta);
  };

  useEffect(() => {
    fetchAgendas(userId);
  }, [isFetch]);

  function dayTrigger(day) {
    setPopState()
    setPopAgendas(day)
  }

  return (
    <>
    <div style={calBoundaries}>
      <Container
        style={{ marginBottom: "1rem" }}
        topRight
        color={Colors.orange}
        height="6rem"
        width="53.1rem"
      >
        <div style={topHalfStyles}>
          <ButtonText
            style={{ marginTop: "1rem" }}
            color={Colors.purple}
            alter={Colors.pink}
            text="<"
            action={clickBackward}
          />
          <MonthHeader month={month} />
          <ButtonText
            style={{ marginTop: "1rem" }}
            color={Colors.purple}
            alter={Colors.pink}
            text=">"
            action={clickForward}
          />
        </div>
        <div style={weekDayDiv}>
          {weekDays.map((day) => (
            <h2>{day}</h2>
          ))}
        </div>
      </Container>
      <Calendar
        width="55rem"
        height="35rem"
        agendas={agendas}
        delta={delta}
        updateAction={updateMonthName}
        action={dayTrigger}
      />
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    month: state.appState.month,
    delta: state.appState.monthDelta,
    userId: state.account.accountData.user_id,
    isFetch: state.agendas.agendasFetch,
    agendas: state.agendas.agendas,
    popState: state.appState.desktop.popState
  };
};

export default connect(mapStateToProps, {
  moveMonthForward,
  moveMonthBakward,
  updateMonthName,
  fetchAgendas,
  setPopState,
  setPopAgendas
})(CalendarPane);
