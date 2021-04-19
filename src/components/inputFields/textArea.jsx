import { useState, useEffect } from "react";
function TextArea({ placeholder, name, height, border, register, style }) {
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
  const textAreaStyle = {
    height: height,
    border: isBordered,
    borderRadius: "8px",
    padding: "1rem",
    resize: "none",
    fontFamily: "'Rancho', cursive",
    fontSize: "1.125rem",
    ...style,
  };
  return (
    <textarea
      ref={register}
      placeholder={placeholder}
      name={name}
      style={textAreaStyle}
    />
  );
}

export default TextArea;
