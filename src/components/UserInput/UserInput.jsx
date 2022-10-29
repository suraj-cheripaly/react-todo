import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled(Grid)`
  padding-bottom: 25px;
`;

const UserInput = ({ userInput, setUserInput, setTasks, tasks, editId }) => {
  const editData = tasks.find((obj) => obj.id === editId);

  useEffect(() => {
    if (editData) {
      setUserInput({ ...tasks, input: editData?.input });
    } else {
      setUserInput({ ...tasks, input: "" });
    }
  }, [editData, setUserInput, tasks]);

  console.log(tasks);

  const addTasks = () => {
    setTasks([...tasks, { id: Date.now(), input: userInput.input }]);
    setUserInput({ ...tasks, input: "" });
  };

  return (
    <Wrapper container spacing={1} justifyItems="center" alignItems="center">
      <Grid item xs={2} />
      <Grid item xs={6}>
        <TextField
          size="small"
          placeholder="add task here ..."
          variant="outlined"
          fullWidth
          onKeyDown={(e) =>
            userInput.input.length > 0 && e.key === "Enter" && addTasks()
          }
          onChange={(e) => setUserInput({ ...tasks, input: e.target.value })}
          value={userInput.input}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          // disabled={userInput.input.length === 0}
          onClick={() => userInput.input.length > 0 && addTasks()}
        >
          Add Task
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default UserInput;
