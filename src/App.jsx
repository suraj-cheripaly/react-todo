import { Grid } from "@mui/material";
import React, { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import UserInput from "./components/UserInput/UserInput";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";

const Wrapper = styled(Grid)`
  text-align: center;
  padding-top: 70px;
`;

const App = () => {
  const [userInput, setUserInput] = useState({
    input: "",
    id: Date.now(),
  });
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Wrapper item xs={7}>
        <UserInput
          userInput={userInput}
          setUserInput={setUserInput}
          setTasks={setTasks}
          tasks={tasks}
          editId={editId}
          setEditId={setEditId}
        />
        <Tasks data={tasks} setTasks={setTasks} setEditId={setEditId} />
      </Wrapper>
    </Grid>
  );
};

export default App;
