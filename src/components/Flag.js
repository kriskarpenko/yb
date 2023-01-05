import Board from "./Board";
import { COLORS } from "../utils/colors";

const Flag = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Board color={COLORS.blue} name="Not Yellow" />
      <Board color={COLORS.yellow} name="Not Blue" />
    </div>
  );
};

export default Flag;
