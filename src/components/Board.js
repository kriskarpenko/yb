import { Link } from "react-router-dom";
import Cell from "./Cell";

const CELL_COUNT = 10000;
const CELL_MIN_SIZE = 4;
const MIN_COLUMN_COUNT = Math.trunc(Math.sqrt(CELL_COUNT));

const Board = ({ color = "pink", list = [], name: propName = "unknown" }) => {
  const renderCells = () => {
    const result = [];
    const numberOfCells = CELL_COUNT;
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
            <Cell
              key={phrases[0] + i}
              size={CELL_MIN_SIZE}
              title={phrases.join(" ")}
            />
          </Link>
        ) : (
          <Cell key={phrases[0] + i} size={CELL_MIN_SIZE} />
        )
      );
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
