import React from "react";
import Task from "../../components/Task/Task";

const Tasks = ({ data, setTasks, setEditId }) => {
  return data.length > 0 ? (
    <>
      {data?.map((obj) => (
        <Task
          data={obj}
          tasksData={data}
          setTasks={setTasks}
          setEditId={setEditId}
        />
      ))}
    </>
  ) : (
    "no tasks added"
  );
};

export default Tasks;
