import ColorPicker from "../../../../components/inputFields/colorPicker";
import { Colors } from "../../../../db_placeholder/tempColors";

function MobileColors() {
  const tempColors = ["orange", "red", "purple", "green", "pink", "yellow"];
  return (
    <div
      style={{
        width: "90%",
        height: "16rem",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {tempColors.map((color) => (
        <ColorPicker
          key={color}
          color={Colors[color]}
          width="28.5%"
          height="80%"
        />
      ))}
    </div>
  );
}

export default MobileColors;
