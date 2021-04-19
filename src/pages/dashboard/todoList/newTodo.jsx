import { ButtonClose, ButtonText } from "../../../components/buttons/Button";
import ColorPicker from "../../../components/inputFields/colorPicker";
import TextArea from "../../../components/inputFields/textArea";
import TextInput from "../../../components/inputFields/textInput";
import { Colors } from "../../../db_placeholder/tempColors";
import { useForm } from "react-hook-form";
import {
  containerStyle,
  colorPickerStyles,
  titleInputStyles,
  textAreaStyles,
  buttonContainer,
  newTodoForm,
} from "./todoConst";
import { useState } from "react";
import { connect } from "react-redux";
import { postTask } from "../../../redux/actions";

function NewTask({ action, colors, userId, postTask }) {
  const [chosenColor, setChosenColor] = useState("");
  const { register, handleSubmit } = useForm();
  async function submitNewTask(data) {
    let newTaskData = {
      newTask: {
        title: data.title,
        description: data.description,
        color: chosenColor,
        user: userId,
      },
    };
    await postTask(newTaskData);
    action()
  }
  return (
    <div style={containerStyle}>
      <div style={colorPickerStyles}>
        {colors.map((color) => (
          <ColorPicker
            key={color.colorhex}
            color={color.colorhex}
            colorId={color.color_id}
            chosenColor={chosenColor}
            setChosenColor={setChosenColor}
          />
        ))}
      </div>
      <form style={newTodoForm} onSubmit={handleSubmit(submitNewTask)}>
        <TextInput
          style={titleInputStyles}
          name="title"
          register={register}
          placeholder="Task name..."
          border
        />
        <TextArea
          style={textAreaStyles}
          name="description"
          register={register}
          border
          placeholder="about the task..."
        />
        <div style={buttonContainer}>
          <ButtonText
            style={{ marginRight: "0.5rem" }}
            color={Colors.purple}
            alter={Colors.green}
            text="+ add task"
            type="submit"
          />
          <ButtonClose action={action} color={Colors.red} alter={Colors.pink} />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.account.accountData.user_id,
    colors: state.colors.colors,
  };
};

export default connect(mapStateToProps, { postTask })(NewTask);
