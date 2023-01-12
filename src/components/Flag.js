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
      const dataItems = snapshot.val();
      const b = [];
      const y = [];
      for (let index = 0; index < dataItems.length; index++) {
        const { name, date, text, type } = dataItems[index];
        if (type === "b") {
          b.push({ name, date, text, index });
        } else {
          y.push({ name, date, text, index });
        }
      }
      console.log("b length:", b.length, "y length:", y.length);
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
