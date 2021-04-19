import { useState, useEffect } from "react";

function TextInput({
  placeholder,
  name,
  border,
  type = "text",
  style,
  register,
}) {
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
  const textInputStyle = {
    height: "1.5rem",
    border: isBordered,
    borderRadius: "8px",
    paddingLeft: "1rem",
    fontFamily: "'Rancho', cursive",
    fontSize: "1.25rem",
    ...style,
  };

  return (
    <input
      ref={register}
      type={type}
      name={name}
      style={textInputStyle}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
