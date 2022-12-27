import React from "react";

const Board = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        flex: 1,
        minHeight: "50vh",
      }}
    >
      <div>Content's here {color}</div>
    </div>
  );
};

export default Board;
