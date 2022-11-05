import React from "react";
import { Grid, Button, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@mui/material/styles";

const Wrapper = styled(Grid)`
  padding: ${(props) => (props.isMobile ? "5px 150px" : "5px 10px")};
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  const deleteTask = () => {
    setTasks(tasksData.filter((obj) => obj.id !== data.id));
  };

  return (
    <Wrapper isMobile={isMobile} container justifyContent="space-between">
      <TextWrapper item md={9} xs={7}>
        <TypoWrapper variant="h6">{data.input}</TypoWrapper>
      </TextWrapper>
      <Grid item md={3} xs={5}>
        <Button onClick={() => setEditId(data.id)}>
          <EditIcon />
        </Button>
        <Button onClick={deleteTask}>
          <DeleteIcon />
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default Task;
