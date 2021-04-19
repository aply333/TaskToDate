import { useState } from "react";

const buttonStyles = {
  color: "#fff",
  height: "2.5rem",
  padding: "1rem",
  textAlign: "center",
  border: "none",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  fontFamily: "'Rancho', cursive",
  fontSize: "1.5rem",
  transition: "all ease 0.3s",
};

export function ButtonText({ action, color, alter, text, type, style }) {
  const [buttonColor, setButtonColor] = useState(color);
  const textButton = {
    ...buttonStyles,
    backgroundColor: buttonColor,
    ...style,
  };
  const onEnter = () => {
    setButtonColor(alter);
  };
  const onExit = () => {
    setButtonColor(color);
  };
  return (
    <button
      onClick={action}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      style={textButton}
      type={type}
    >
      {text}
    </button>
  );
}

export function ButtonClose({ action, color, alter, style }) {
  const [buttonColor, setButtonColor] = useState(color);
  const cancelStyles = {
    ...buttonStyles,
    backgroundColor: buttonColor,
    ...style,
  };
  const onEnter = () => {
    setButtonColor(alter);
  };
  const onExit = () => {
    setButtonColor(color);
  };
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      style={cancelStyles}
    >
      X
    </button>
  );
}

export function ButtonAdd({ action, color, alter, style }) {
  const [buttonColor, setButtonColor] = useState(color);
  const addStyles = {
    ...buttonStyles,
    backgroundColor: buttonColor,
    fontSize: "2rem",
    ...style,
  };
  const onEnter = () => {
    setButtonColor(alter);
  };
  const onExit = () => {
    setButtonColor(color);
  };
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      style={addStyles}
    >
      +
    </button>
  );
}
