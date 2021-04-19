import { useState, useEffect } from "react";
import { bordered } from "../componentConst";

function Container({
  width,
  height,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  all,
  color,
  hasBorder,
  style,
  afterStyle,
  ...props
}) {
  const [corners, setCorners] = useState({
    tL: "0px",
    tR: "0px",
    bL: "0px",
    bR: "0px",
  });
  const [border, setBorder] = useState("");
  useEffect(() => {
    if (hasBorder === true) {
      setBorder(bordered);
    }
    if (topLeft === true) {
      setCorners((prev) => ({ ...prev, tL: "8px" }));
    }
    if (topRight === true) {
      setCorners((prev) => ({ ...prev, tR: "8px" }));
    }
    if (bottomLeft === true) {
      setCorners((prev) => ({ ...prev, bL: "8px" }));
    }
    if (bottomRight === true) {
      setCorners((prev) => ({ ...prev, bR: "8px" }));
    }
    if (all === true) {
      setCorners({
        tL: "8px",
        tR: "8px",
        bL: "8px",
        bR: "8px",
      });
    }
  }, []);

  const containerStyles = {
    ...style,
    width: width,
    height: height,
    padding: "1rem",
    backgroundColor: color,
    border: border,
    borderRadius: `${corners.tL} ${corners.tR} ${corners.bR} ${corners.bL}`,
    ...afterStyle
  };
  return <div style={containerStyles}>{props.children}</div>;
}

export default Container;
