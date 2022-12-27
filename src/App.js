import Board from "./components/Board";
import { COLORS } from "./utils/colors";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Board color={COLORS.yellow} />
      <Board color={COLORS.blue} />
    </div>
  );
}

export default App;
