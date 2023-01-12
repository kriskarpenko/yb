import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

const InfoPage = () => {
  const { index } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getDatabase();
    const dataRef = ref(db, `data/${index}`);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      setLoading(false);
    });
  }, [index]);

  console.log("InfoPage() - index:", index);

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
    </div>
  );
};

export default InfoPage;
