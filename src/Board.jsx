import { useState } from "react";

function Board() {
  const [square, setSquare] = useState([Array(9).fill(null)]);

  const [curent, setCurrent] = useState(0);
  const xnext = curent % 2 === 0;
  const currentSquare = square[curent];

  const boardClic = (nextsqu) => {
    const nexthist = [...square.slice(0, curent + 1), nextsqu];
    setSquare(nexthist);

    setCurrent(nexthist.length - 1);
  };

  const moveClic = (val) => {
    setCurrent(val);
  };

  const moves = square.map((cur, idx) => {
    var desc = "";
    if (idx > 0) {
      desc = "Go to this move" + idx;
    } else {
      desc = "Go to home";
    }
    return (
      <button key={idx} onClick={() => moveClic(idx)}>
        {desc}
      </button>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "700px",
      }}
    >
      <div>
        <Game square={currentSquare} xnext={xnext} boardClic={boardClic} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>{moves}</div>
    </div>
  );
}

const Game = (prop) => {
  const { square, xnext, boardClic } = prop;
  //   const [square, setSquare] = useState(Array(9).fill(null));
  //   const [xnext, setXnext] = useState(true);

  const handleClick = (i) => {
    const nextSquare = square.slice();

    if (square[i] || calculatewinner(square)) return;
    if (xnext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    // setSquare(nextSquare);
    // setXnext(!xnext);
    boardClic(nextSquare);
  };

  var winnner = calculatewinner(square);
  var dec = "";
  if (winnner) {
    dec = "Your winner " + winnner;
  } else {
    dec = "next move" + (xnext ? "X" : "O");
  }
  return (
    <div>
      {dec}
      <div>
        <Square val={square[0]} cli={() => handleClick(0)} />
        <Square val={square[1]} cli={() => handleClick(1)} />
        <Square val={square[2]} cli={() => handleClick(2)} />
      </div>
      <div>
        <Square val={square[3]} cli={() => handleClick(3)} />
        <Square val={square[4]} cli={() => handleClick(4)} />
        <Square val={square[5]} cli={() => handleClick(5)} />
      </div>
      <div>
        <Square val={square[6]} cli={() => handleClick(6)} />
        <Square val={square[7]} cli={() => handleClick(7)} />
        <Square val={square[8]} cli={() => handleClick(8)} />
      </div>
    </div>
  );
};

const Square = (prop) => {
  const { val, cli } = prop;
  return (
    <button
      onClick={cli}
      style={{
        height: "40px",
        width: "40px",
        fontSize: "20px",
        background: "red",
      }}
    >
      {val}
    </button>
  );
};

const calculatewinner = (squ) => {
  var val = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [4, 1, 7],
    [5, 8, 2],
    [0, 4, 8],
    [4, 6, 2],
  ];
  for (var i of val) {
    const [a, b, c] = i;
    if (squ[a] === squ[b] && squ[a] === squ[c]) {
      return squ[a];
    }
  }
  return null;
};
export default Board;
