import axios from "axios";
import { useEffect, useState } from "react";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <h1>Super Heroes</h1>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
};

export default SuperHeroesPage;
