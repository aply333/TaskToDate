import TextArea from "../../../../components/inputFields/textArea";
import TextInput from "../../../../components/inputFields/textInput";

function TaskData() {
  const topInput = {
    height: "3rem",
    width: "84%",
    marginBottom: "1.5rem",
    fontSize: "2rem"
  };

  const bottomInput = {
    width: "80%",
    height: "20rem",
    fontSize: "2rem"
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        width: "90%",
        alignItems: "center",
      }}
    >
      <TextInput border style={topInput} placeholder="Task name..." />
      <TextArea border style={bottomInput} placeholder="about the task..." />
    </div>
  );
}

export default TaskData;
