import { Link } from "react-router-dom";
import Cell from "../Cell";

// const CELL_COUNT = 10000;
const ROWS_COUNT = 50;
const COLUMNS_COUNT = 200;
// const MIN_COLUMN_COUNT = Math.trunc(Math.sqrt(CELL_COUNT));

const Board = ({ color = "pink", list = [], name: propName = "unknown" }) => {
  const renderCells = () => {
    const result = [];
    // const numberOfCells = CELL_COUNT;
    const numberOfCells = list.length;

    for (let i = 0; i < numberOfCells; i++) {
      const { name, text, date, index } = list?.[i] ?? {};
      const phrases = [`${propName} ${i + 1}`];
      if (name) {
        phrases[0] = name;
      }
      if (text) {
        phrases.push(`said "${text}"`);
      }
      if (date) {
        phrases.push(`on ${date}`);
      }

      result.push(
        index ? (
          <Link to={`info/${index}`}>
            <Cell key={phrases[0] + i} title={phrases.join(" ")} />
          </Link>
        ) : (
          <Cell key={phrases[0] + i} />
        )
      );
    }
    return result;
  };

  return (
    <div
      className="board"
      style={{
        backgroundColor: color,
        gridTemplateColumns: `repeat(${COLUMNS_COUNT}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS_COUNT}, 1fr)`,
      }}
    >
      {renderCells()}
    </div>
  );
};

export default Board;
