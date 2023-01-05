import Cell from "./Cell";

const CELL_COUNT = 10000;
const CELL_MIN_SIZE = 4;
const MIN_COLUMN_COUNT = Math.trunc(Math.sqrt(CELL_COUNT));

const Board = ({ color = "pink", name = "unknown" }) => {
  const renderCells = () => {
    const result = [];
    for (let i = 1; i <= CELL_COUNT; i++) {
      result.push(<Cell size={CELL_MIN_SIZE} title={name + " " + i} />);
    }
    return result;
  };

  const repeat = MIN_COLUMN_COUNT * 2;
  // const repeat = Math.trunc((MIN_COLUMN_COUNT / 9) * 16);
  return (
    <div
      style={{
        backgroundColor: color,
        display: "grid",
        gridTemplateColumns: `repeat(${repeat}, 1fr)`,
        gridTemplateRows: "auto",
      }}
    >
      {renderCells()}
    </div>
  );
};

export default Board;
