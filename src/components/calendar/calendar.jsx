import { useEffect, useState } from "react";
import { bordered } from "../componentConst";
import { agendaStyle, mobileAgendas, weekStyle } from "./calConst";
import moment from "moment";
import Container from "../conainter/Contianer";

function Calendar({
  width,
  height,
  fontSize,
  agendas,
  delta,
  updateAction,
  action,
  isMobile
}) {
  function generateCalendar(delta = 0) {
    function monthDeviation() {
      const initialMomment = moment();
      return initialMomment.add(delta, "month");
    }
    const today = monthDeviation();
    updateAction(today.format("MMMM"));
    const startDay = today.clone().startOf("month").startOf("week");
    const endDay = today.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(1, "day");
    const calGrid = [];
    while (day.isBefore(endDay, "day")) {
      calGrid.push(
        Array(7)
          .fill({})
          .map(() => {
            let inDay = day.add(1, "day").clone();
            let agendaCheck = () => {
              let daysAgendas = [];
              agendas.map((agenda) => {
                if (agenda.date === inDay.format("MM-DD-YYYY")) {
                  daysAgendas.push(agenda);
                }
              });
              return daysAgendas;
            };
            const dayObject = {
              date: inDay,
              content: agendaCheck(),
              dateFormated: inDay.format("MM-DD-YYYY"),
            };
            return dayObject;
          })
      );
    }
    return calGrid;
  }

  const [calArray, setCalArray] = useState([]);

  useEffect(() => {
    let newGrid = generateCalendar(delta);
    setCalArray(newGrid);
  }, [delta]);

  const calStyle = {
    width: width,
    height: height,
    borderRight: bordered,
    borderTop: bordered,
    overflow: "hidden",
    borderRadius: "0 0 8px 0",
  };

  const dayStyle = {
    borderLeft: bordered,
    borderBottom: bordered,
    width: "14%",
    paddingLeft: "0.3rem",
    paddingTop: "0.3rem",
    fontFamily: "'Rancho', cursive",
    fontSize: fontSize,
  };

  const [viewMode, setViewMode] = useState()
  useEffect(()=>{
    if(isMobile){
      setViewMode(mobileAgendas)
    }else{
      setViewMode(agendaStyle)
    }
  }, [])

  return (
    <div style={calStyle}>
      {calArray.map((week) => (
        <div key={Math.random() * 10} style={weekStyle}>
          {week.map((day) => (
            <div
              key={Math.random() * 100}
              style={dayStyle}
              onClick={() => {
                action(day);
              }}
            >
              {day.date.format("D")}.
              <div>
                {day.content.map((agenda) => (
                  <Container
                    key={Math.random() * 100}
                    afterStyle={viewMode}
                    color={agenda.color_name}
                    all
                    height="0.5rem"
                    width="80%"
                  >
                    <p style={{ marginTop: "-0.65rem" }}>
                      {agenda.agenda_title}
                    </p>
                  </Container>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
