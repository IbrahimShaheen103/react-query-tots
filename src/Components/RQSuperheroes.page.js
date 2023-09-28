import { useSuperHerosData } from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";
const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log();
  };
  const onError = (error) => {
    console.log();
  };
  const { data, isLoading, isFetching, isError, error, refetch } =
    useSuperHerosData(onSuccess, onError);
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>RQ Super Heroes</h1>
      <button onClick={refetch}>fetch</button>
      {data?.data.map((hero) => (
        <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>
          <p>{hero.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
