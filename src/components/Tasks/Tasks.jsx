import { Typography } from "@mui/material";
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
    <Typography>no tasks added</Typography>
  );
};

export default Tasks;
