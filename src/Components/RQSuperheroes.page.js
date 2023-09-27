import { useSuperHerosData } from "../hooks/useSuperHerosData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
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
      {/* {data?.data.map((hero) => (
        <div key={hero.id}>
          <p>{hero.name}</p>
        </div>
      ))} */}
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </div>
  );
};

export default RQSuperHeroesPage;
