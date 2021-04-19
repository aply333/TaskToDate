import { useState } from "react";
import { bordered} from "../componentConst"

function TaskItem({ width, color, title, desc, isMobile }) {

  const mobileSize = "4rem"
  const desktopSize = "2.5rem"
  const drawerDekstop = "10rem"
  const drawerMobile = "15rem"

  const noBorder = "rgba(255, 255, 255, 0) 1px solid";
  const [containerHeight, setContainterHeight] = useState({
    height: isMobile? mobileSize : desktopSize,
    border: noBorder,
  });

  const taskContainer = {
    height: containerHeight.height,
    border: containerHeight.border,
    borderRadius: "8px",
    fontFamily: "'Rancho', cursive",
    overflow: "hidden",
    transition: "all ease-in-out 0.4s",
    position:"relative",
    marginBottom: ".5rem",
    width: width
  };

  const headerContainter = {
    backgroundColor: color,
    width: "100%",
    color: "#fff",
    height: isMobile? mobileSize : desktopSize,
    position: "absolute",
  };

  const titleStyles = {
    marginTop: isMobile? "0.3rem":"0px",
    height: isMobile? mobileSize : desktopSize,
    marginBottom: "0px",
    paddingLeft: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0",
    width: "100%",
    fontSize: isMobile? "2rem" :"1.25rem",
    color: "#fff",
  };

  const [collapse, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    if (collapse === true) {
      setCollapsed(false);
      setContainterHeight({
        height: isMobile? mobileSize: desktopSize,
        border: noBorder,
      });
    } else {
      setCollapsed(true);
      setContainterHeight({
        height: isMobile? drawerMobile: drawerDekstop,
        border: bordered,
      });
    }
  };

  function DescriptionDrawer() {
    const drawerStyle = {
      paddingTop: "0",
      color:"#000",
      paddingLeft:"0.5rem",
      fontSize: isMobile? "1.5rem" : "1rem"
    };
    return (
      <div style={drawerStyle}>
        <p>{desc}</p>
      </div>
    );
  }

  return (
    <>
      <div style={taskContainer}>
        <div style={headerContainter} onClick={toggleCollapse}>
          <h1 style={titleStyles}>{title}</h1>
          <DescriptionDrawer />
        </div>
         
      </div>
    </>
  );
}

export default TaskItem;
