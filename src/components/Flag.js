import Board from "./Board";
import { COLORS } from "../utils/colors";
import { useEffect, useState } from "react";

const Flag = () => {
  const [yellow, setYellow] = useState([]);
  const [blue, setBlue] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data.json");
      const data = await res.json();
      const b = [];
      const y = [];
      for (const { name, date, text, type } of data) {
        if (type === "b") {
          b.push({ name, date, text });
        } else {
          y.push({ name, date, text });
        }
      }
      setBlue(b);
      setYellow(y);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Board color={COLORS.blue} list={blue} name="Not Yellow" />
      <Board color={COLORS.yellow} list={yellow} name="Not Blue" />
    </div>
  );
};

export default Flag;
