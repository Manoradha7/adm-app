import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar, Button, Typography, TextField } from "@mui/material";
import TicTacToe from "./components/TicTacToe";
import { Switch, Route, useHistory } from "react-router-dom";
import { InfiniteScroll } from "./components/InfiniteScroll";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar sx={{ boxShadow: 10, gap: 3 }}>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/tictactoe")}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h5 style={{ textShadow: "0 0 20px black" }}>Tic-Tac-Toe</h5>
            </Typography>
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/scroll")}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h5 style={{ textShadow: "0 0 20px black" }}>Scroll</h5>
            </Typography>
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/inf-reply")}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h5 style={{ textShadow: "0 0 20px black" }}>Reply Tree</h5>
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/tictactoe" component={TicTacToe} />
        <Route path="/scroll" component={InfiniteScroll} />
        <Route path="/inf-reply" component={InfiniteReply} />
      </Switch>
    </div>
  );
}

function InfiniteReply() {
  const [message, setMessage] = useState([]);

  function ReplyMsg(){
   
  }

  return (
    <div className="msgContainer">
      <TextField
        label="Type Something..."
        sx={{ width: "500px" }}
        id="text"
        variant="standard"
      />
      <label for="text" style={{fontSize:"20px"}}>
        Hello Everyone
        <Button
          variant="contained"
          onClick={ReplyMsg}
          color="inherit"
          sx={{ borderRadius: 5, background: "yellow" }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h5 style={{ textShadow: "0 0 20px black" }}>Reply</h5>
          </Typography>
        </Button>
        {message.map((msg,id)=>{
          return(
            <span>{msg}</span>
          )
        })}
      </label>
    </div>
  );
}

export default App;
