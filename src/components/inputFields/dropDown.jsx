import { useState, useEffect } from "react";

export function DropDown({ border,width="", height="1.5rem" , name, ...props }) {
  const bordered = "#C4C4C4 1px solid";
  const noborder = "none";
  const [isBordered, setBorder] = useState();
  useEffect(() => {
    if (border === true) {
      setBorder(bordered);
    } else {
      setBorder(noborder);
    }
  });
  const dropDownStyle = {
    width:width,
    height:height,
    border: isBordered,
    borderRadius: "8px",
    padding: "1rem",
    resize: "none",
    background: "none",
    fontFamily: "'Rancho', cursive",
    fontSize: "1.5rem",
    marginBottom: "1rem"
  };
  return <select  style={dropDownStyle}>{props.children}</select>;
}

export function Option({ ...props }) {
    const optionStyles={
        backgroundColor: "#fff",
    }
  return <option style={optionStyles}>{props.children}</option>;
}
