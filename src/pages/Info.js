import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import PersistentEditor from "../components/editors/PersistentEditor";
import div from "../components/editors/PersistentContainer";
import PersistentContext from "../components/editors/PersistentContext";

const InfoPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getDatabase();
    const dataRef = ref(db, `data/${id}`);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, [id]);

  console.log("InfoPage() - id:", id);

  if (loading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      Name: {data?.name}
      <br />
      Type: {data?.type}
      <br />
      Text: {data?.text}
      <br />
      Date: {data?.date}
      <br />
      <PersistentContext defaultValue="123">
        <div>
          <PersistentEditor />
          <br />
          <PersistentEditor />
          <br />
          <PersistentEditor />
        </div>
      </PersistentContext>
      <br />
      <PersistentContext defaultValue="456">
        <div>
          <PersistentEditor />
          <br />
          <PersistentEditor />
        </div>
      </PersistentContext>
    </div>
  );
};

export default InfoPage;
