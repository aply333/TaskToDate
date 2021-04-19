import React, { useState } from "react";
import Container from "../../../components/conainter/Contianer";
import { loginContainer } from "../../login/mobile/mobileLoginConst";
import { Colors } from "../../../db_placeholder/tempColors";
import UnsortedTask from "./unsortedView";
import MobileCalendar from "./calendarView";
import { ButtonAdd } from "../../../components/buttons/Button";
import list from "../../../assets/list.svg";
import cal from "../../../assets/cal.svg";
import { connect } from "react-redux";
import { headerStyle, taskCountStyle } from "./mobileConst";

function MobileDashboard({ user, tasks }) {
  const [calView, setCalView] = useState(false);
  
  function toggleViews() {
    if (calView === false) {
      setCalView(true);
    } else {
      setCalView(false);
    }
  }

  return (
    <div style={loginContainer}>
      <Container
        bottomLeft
        bottomRight
        height="6rem"
        width="90%"
        color={Colors.orange}
        style={{ marginBottom: "2rem" }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "0" }}>
            <h1 style={headerStyle}>{user}'s</h1>
            <p style={taskCountStyle}>Unsorted tasks: {tasks.length}</p>
          </div>
          <img
            onClick={toggleViews}
            style={{ width: "6rem", height: "6rem" }}
            src={calView ? cal : list}
            alt="List icon, tap to swap to calendar."
          />
        </div>
      </Container>
      {calView ? <MobileCalendar /> : <UnsortedTask />}
      <div style={{ width: "80%" }}>
        <ButtonAdd
          style={{
            width: "4rem",
            height: "4rem",
            fontSize: "6rem",
          }}
          color={Colors.purple}
          alter={Colors.green}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.account.accountData.username,
    tasks: state.tasks.tasks
  };
};

export default connect(mapStateToProps, {})(MobileDashboard);
