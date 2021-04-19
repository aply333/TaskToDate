import { useState, useEffect } from "react";

function PopUp({ trigger, color, dropColor, action, style, ...props }) {
  const [opacity, setOpacity] = useState(0);

  const backdrop = {
    backgroundImage: `radial-gradient(${dropColor} , rgba(255,255,255,0))`,
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100vh",
    transition: "all ease 0.5s",
    opacity: opacity,
  };

  const popStyles = {
    position: "absolute",
    zIndex: "2",
    left: "0",
    right: "0",
    top: "2rem",
    backgroundColor: color,
    width: "22rem",
    height: "25rem",
    margin: "3rem auto",
    borderRadius: "8px",
    boxShadow: "4px 4px 12px rgba( 25, 25, 25, 0.5)",
    transition: "all ease 1s",
    opacity: opacity,
    ...style
  };

  useEffect(() => {
    setOpacity(1);
  }, [trigger]);

  function PopContent() {
    return (
      <>
        <div style={popStyles}>{props.children}</div>
        <div style={backdrop} onClick={action}></div>
      </>
    );
  }

  return <>{trigger ? <PopContent /> : null}</>;
}

export default PopUp;
