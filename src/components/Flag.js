import Board from "./Board";
import { COLORS } from "../utils/colors";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Flag = () => {
  const [yellow, setYellow] = useState([]);
  const [blue, setBlue] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const dataRef = ref(db, "data");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
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
    });
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
