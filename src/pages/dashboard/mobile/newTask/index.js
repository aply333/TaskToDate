import { React, useEffect, useState } from "react";
import Container from "../../../../components/conainter/Contianer";
import { Colors } from "../../../../db_placeholder/tempColors";
import { loginContainer } from "../../../login/mobile/mobileLoginConst";
import BottomNewTask from "./bottom";
import Confirm from "./confirm";
import MobileColors from "./mobileColor";
import TaskData from "./taskData";

function MobileNewTask() {
  const [step, setStep] = useState("Pick a color:");
  
  const [currentView, setCurrentView] = useState("pick_color")
  useEffect(()=>{
    if(currentView==="pick_color"){
        setStep("Pick a color:")
    }
    if(currentView==="task_data"){
        setStep("The Task:")
    }
    if(currentView==="confirm"){
        setStep("Deadline?")
    }
  },[currentView])


  const taskStep = {
    marginTop: "0",
    fontFamily: "'Rancho', cursive",
    color: "#fff",
    fontSize: "4.5rem",
  };

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
        <h1 style={taskStep}>{step}</h1>
      </Container>
        {currentView==="pick_color"? <MobileColors/> : null}
        {currentView==="task_data"? <TaskData/> : null}
        {currentView==="confirm"? <Confirm/> : null}
      <BottomNewTask current={currentView} setCurrent={setCurrentView}/>
    </div>
  );
}

export default MobileNewTask;
