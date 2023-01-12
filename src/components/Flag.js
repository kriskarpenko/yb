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
      const dataAsObject = snapshot.val();
      const objectKeys = Object.keys(dataAsObject);
      const b = [];
      const y = [];
      // for (let i = 0; i < objectKeys.length; i++) {
      //   const { name, date, text, type } = dataAsObject[objectKeys[i]] ?? {};
      //   if (["b", "B", "Blue", "blue"].includes(type)) {
      //     b.push({ name, date, text, index: objectKeys[i] });
      //   } else {
      //     y.push({ name, date, text, index: objectKeys[i] });
      //   }
      // }
      for (const key of objectKeys) {
        const { name, date, text, type } = dataAsObject[key] ?? {};
        const newItem = { name, date, text, index: key };
        if (["b", "blue"].includes(type?.toLowerCase())) {
          b.push(newItem);
        } else {
          y.push(newItem);
        }
      }
      // const items = objectKeys.map((key) => dataAsObject[key]);
      // const blueItems = items.filter(({ type }) =>
      //   ["b", "blue"].includes(type?.toLowerCase())
      // );
      // const yellowItems = items.filter(({ type }) =>
      //   ["y", "yellow"].includes(type?.toLowerCase())
      // );
      // console.log(blueItems, yellowItems);

      setBlue(b);
      setYellow(y);
    });
  }, []);

  return (
    <div className="flag">
      <Board color={COLORS.blue} list={blue} name="Blue" />
      <Board color={COLORS.yellow} list={yellow} name="Yellow" />
    </div>
  );
};

export default Flag;
