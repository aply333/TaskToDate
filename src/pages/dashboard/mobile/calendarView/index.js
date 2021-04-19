import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendar from "../../../../components/calendar/calendar";
import TaskItem from "../../../../components/taskItems/taskItem";
import { Colors } from "../../../../db_placeholder/tempColors";
import { tempTask } from "../../../../db_placeholder/tempTasks";
import { fetchAgendas, setPopAgendas, updateMonthName } from "../../../../redux/actions";

function MobileCalendar({
  isFetch,
  fetchAgendas,
  user,
  agendas,
  updateMonthName,
  delta,
  popData
}) {

  function dayTrigger(day){
    setPopAgendas(day)
    console.log(day)
    console.log(popData)
  }

  useEffect(() => {
    fetchAgendas(user);
  }, [isFetch]);

  return (
    <>
      <Calendar
        agendas={agendas}
        delta={delta}
        updateAction={updateMonthName}
        width="90%"
        height="15rem"
        action={dayTrigger}
      />
      <br />
      {popData.map((agenda) => (
        <TaskItem
          color={Colors[agenda.color_name]}
          title={agenda.agenda_title}
          desc={agenda.agenda_description}
          width="80%"
          isMobile
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.account.accountData.user_id,
    agendas: state.agendas.agendas,
    popData: state.appState.desktop.popAgendas,
    delta: state.appState.monthDelta,
    isFetch: state.agendas.agendasFetch,
  };
};

export default connect(mapStateToProps, { fetchAgendas, updateMonthName, setPopAgendas })(
  MobileCalendar
);
