import { Colors } from "../../../../db_placeholder/tempColors";
import TaskItem from "../../../../components/taskItems/taskItem";
import { tempTask } from "../../../../db_placeholder/tempTasks";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../../../redux/actions";

function UnsortedTask({ isFetch, tasks, userId, fetchTasks }) {
  useEffect(() => {
    fetchTasks(userId);
  }, [isFetch]);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        {tasks.map((task) => (
          <TaskItem
            color={Colors[task.color_name]}
            title={task.task_title}
            desc={task.task_description}
            width="80%"
            isMobile
          />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.account.accountData.user_id,
    isFetch: state.tasks.isFetch,
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps, { fetchTasks })(UnsortedTask);
