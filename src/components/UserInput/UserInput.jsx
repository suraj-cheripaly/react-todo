import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Wrapper = styled(Grid)`
  padding-bottom: 25px;
`;

const UserInput = ({
  userInput,
  setUserInput,
  setTasks,
  tasks,
  editId,
  setEditId,
}) => {
  const editData = tasks.find((obj) => obj.id === editId);

  useEffect(() => {
    if (editData) {
      setUserInput({ ...tasks, input: editData?.input });
    } else {
      setUserInput({ ...tasks, input: "" });
    }
  }, [editData, setUserInput, tasks]);

  const addTasks = () => {
    if (editId) {
      const check = tasks.map((obj) =>
        obj.id === editId ? { id: editId, input: userInput.input } : obj
      );
      setTasks(check);
      setEditId(null);
      setUserInput({ ...tasks, input: "" });
    } else {
      setTasks([...tasks, { id: Date.now(), input: userInput.input }]);
      setUserInput({ ...tasks, input: "" });
    }
  };

  return (
    <Wrapper container spacing={1} justifyItems="center" alignItems="center">
      <Grid item md={2} />
      <Grid item md={6} xs={8}>
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
      <Grid item md={2} xs={3}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => userInput.input.length > 0 && addTasks()}
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default UserInput;
