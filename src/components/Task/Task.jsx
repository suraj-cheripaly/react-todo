import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Wrapper = styled(Grid)`
  padding: 5px 150px;
`;

const TextWrapper = styled(Grid)`
  text-align: start;
  background: #ff7961;
  color: white;
  border-radius: 15px;
  padding-bottom: 10px;
`;

const TypoWrapper = styled(Typography)`
  padding-top: 15px;
  padding-left: 20px;
`;

const Task = ({ data, tasksData, setTasks, setEditId }) => {
  const deleteTask = () => {
    setTasks(tasksData.filter((obj) => obj.id !== data.id));
  };

  return (
    <Wrapper container justifyContent="space-between">
      <TextWrapper item xs={9}>
        <TypoWrapper variant="h6">{data.input}</TypoWrapper>
      </TextWrapper>
      <Grid item xs={3}>
        {/* <Button onClick={() => setEditId(data.id)}>
          <EditIcon />
        </Button> */}
        <Button onClick={deleteTask}>
          <DeleteIcon />
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default Task;
