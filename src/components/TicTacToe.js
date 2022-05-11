import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const X_Player = "X";
const O_Player = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [box, setBox] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0, draw: 0 });

  function isGameOver() {
    if (!gameOver) {
      //X-win
      for (let i = 0; i < 8; i++) {
        if (
          box[winCombination[i][0]] === X_Player &&
          box[winCombination[i][1]] === X_Player &&
          box[winCombination[i][2]] === X_Player
        ) {
          setGameOver(true);
          setWinCount({ ...winCount, X: winCount.X + 1 });
          return;
        }
      }
      //O win
      for (let i = 0; i < 8; i++) {
        if (
          box[winCombination[i][0]] === O_Player &&
          box[winCombination[i][1]] === O_Player &&
          box[winCombination[i][2]] === O_Player
        ) {
          setGameOver(true);
          setWinCount({ ...winCount, O: winCount.O + 1 });
          return;
        }
      }
      //draw
      if (!box.includes("")) {
        setDraw(true);
        setGameOver(true);
        setWinCount({ ...winCount, draw: winCount.draw + 1 });
      }
    }
  }
  isGameOver();

  function restartGame() {
    setBox(Array(9).fill(""));
    setGameOver(false);
    setDraw(false);
  }

  function handleClick(index) {
    setBox(
      box.map((item, id) => {
        if (id === index) {
          if (player) {
            return X_Player;
          } else {
            return O_Player;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div className="tictactoe">
      <Board box={box} handleClick={handleClick} />
      {gameOver && (
        <Result
          player={player}
          draw={draw}
          restartGame={restartGame}
          winCount={winCount}
        />
      )}
    </div>
  );
}

function Board({ box, handleClick }) {
  return (
    <div className="board">
      {box.map((item, index) => {
        if (item === "") {
          return (
            <div
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div
              className="cell clicked"
              key={index}
              style={{
                background: item === O_Player ? "violet" : "wheat",
                color: item === O_Player ? "black" : "red",
              }}
            >
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

function Result({ restartGame, player, draw, winCount }) {
  return (
    <div className="result">
      {!draw && <span > {player ? "O Player WON" : "X Player WON"}</span>}
      {draw && <span >DRAW MATCH</span>}
      <h2>X's WINS : {winCount.X}</h2>
      <h2>O's WINS : {winCount.O}</h2>
      <h2>DRAW MATCH : {winCount.draw}</h2>
      <Button
        variant="contained"
        onClick={restartGame}
        color="inherit"
        sx={{ borderRadius: 5, background: "yellow" }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h5 style={{ textShadow: "0 0 20px black" }}>Restart</h5>
        </Typography>
      </Button>
    </div>
  );
}
