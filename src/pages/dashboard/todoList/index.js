import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ButtonAdd } from "../../../components/buttons/Button";
import Container from "../../../components/conainter/Contianer";
import TaskItem from "../../../components/taskItems/taskItem";
import { Colors } from "../../../db_placeholder/tempColors";
import NewTask from "./newTodo";
import { fetchTasks, setPopState, setPopAgendas } from "../../../redux/actions";
import {
  h1Styles,
  pStyles,
  todoHeaderContents,
  listContainer,
  addStyles,
  shiftPane,
  leftPane,
} from "./todoConst";

function ToDoList({
  username,
  tasks,
  fetchTasks,
  userId,
  isFetch
}) {
  useEffect(() => {
    fetchTasks(userId);
  }, [isFetch]);

  const [toggleNew, setToggleNew] = useState(false);
  const [taskPosition, setTaskPosition] = useState("auto");
  function handleNewToggle() {
    if (toggleNew === false) {
      setToggleNew(true);
    } else {
      setToggleNew(false);
    }
  }
  useEffect(() => {
    if (toggleNew === false) {
      setTaskPosition("0");
    } else {
      setTaskPosition("-56%");
    }
  }, [toggleNew]);

  return (
    <div
      style={{
        marginRight: "1rem",
        border: "1px solid rgba(255, 255, 255, 0)",
      }}
    >
      <Container topLeft width="18rem" height="6rem" color={Colors.orange}>
        <div style={todoHeaderContents}>
          <h1 style={h1Styles}>{username}</h1>
          <p style={pStyles}>Un-sorted Tasks: {tasks.length}</p>
        </div>
      </Container>

      <Container
        style={listContainer}
        bottomLeft
        hasBorder
        width="18rem"
        height="33rem"
      >
        <div style={shiftPane}>
          <div
            style={{
              marginLeft: taskPosition,
              ...leftPane,
            }}
          >
            {tasks.map((task) => (
              <TaskItem
                color={Colors[task.color_name]}
                title={task.task_title}
                desc={task.task_description}
                width="18rem"
              />
            ))}
            <ButtonAdd
              style={addStyles}
              color={Colors.purple}
              alter={Colors.green}
              action={handleNewToggle}
            />
          </div>
          <NewTask action={handleNewToggle} />
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.account.accountData.username,
    userId: state.account.accountData.user_id,
    isFetch: state.tasks.isFetch,
    tasks: state.tasks.tasks
  };
};

export default connect(mapStateToProps, {
  fetchTasks,
})(ToDoList);
