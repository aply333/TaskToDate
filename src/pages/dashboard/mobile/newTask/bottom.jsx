import { Colors } from "../../../../db_placeholder/tempColors";
import { ButtonClose, ButtonText } from "../../../../components/buttons/Button";
import { useState } from "react";

function BottomNewTask({current, setCurrent}) {
   
  const [nextText, setNextText] = useState("Next")

  function HandleNext(){
    if(current==='pick_color'){
      setCurrent("task_data")
    }
    if(current==='task_data'){
      setCurrent("confirm")
      setNextText("Confirm")
    }
  }
  
  const buttonStyles = {
    height: "4rem",
    fontSize: "4rem",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        position: "absolute",
        bottom: "1rem"
      }}
    >
      <ButtonClose
        style={{ ...buttonStyles, width: "4rem" }}
        color={Colors.red}
        alter={Colors.pink}
      />
      <ButtonText
        style={{ ...buttonStyles, width: "auto" }}
        text={nextText}
        color={Colors.purple}
        alter={Colors.green}
        action={HandleNext}
      />
    </div>
  );
}

export default BottomNewTask;