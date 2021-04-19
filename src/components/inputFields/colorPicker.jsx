import { useEffect, useState } from "react";

function ColorPicker({
  color,
  width = "4.5rem",
  height = "2.2rem",
  colorId,
  chosenColor,
  setChosenColor,
}) {
  
  const [borderState, setBorderState] = useState("none")

  useEffect(()=>{
      if(chosenColor === colorId){
        setBorderState("double 4px white")
      }else{
        setBorderState("none")
      }
  }, [chosenColor])

  const colorPickerStyles = {
    width: width,
    height: height,
    backgroundColor: color,
    border: borderState,
    borderRadius: "8px",
    marginTop: "0.5rem",
    marginRight: "1rem",
    transition: "all ease 0.3s",
  };

  return (
    <button
      style={colorPickerStyles}
      onClick={(e) => {
        e.preventDefault();
        setChosenColor(colorId);
      }}
    ></button>
  );
}

export default ColorPicker;
