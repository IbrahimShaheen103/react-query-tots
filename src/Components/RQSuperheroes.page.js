import { useState } from "react";
import {
  useAddSuperheroData,
  useSuperHerosData,
} from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";
const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data) => {
    console.log();
  };
  const onError = (error) => {
    console.log();
  };
  const { data, isLoading, isFetching, isError, error, refetch } =
    useSuperHerosData(onSuccess, onError);
  const { mutate } = useAddSuperheroData();
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    mutate(hero);
  };
  return (
    <div>
      <h1>RQ Super Heroes</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={alterEgo}
        onChange={(e) => {
          setAlterEgo(e.target.value);
        }}
      />
      <button disabled={!name && !alterEgo} onClick={handleAddHeroClick}>
        Add
      </button>
      <br />
      <hr />
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
