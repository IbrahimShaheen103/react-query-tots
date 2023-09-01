import axios from "axios";
import { useQuery } from "react-query";
const fetchData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchData
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>RQ Super Heroes</h1>
      {data.data.map((hero) => (
        <div key={hero.id}>
          <p>{hero.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
