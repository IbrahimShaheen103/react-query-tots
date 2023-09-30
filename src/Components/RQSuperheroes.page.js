import { useState } from "react";
import {
  useAddSuperheroData,
  useDeleteSuperHero,
  useSuperHerosData,
} from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";
const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const [id, setId] = useState(0);
  const onSuccess = (data) => {
    console.log();
  };
  const onError = (error) => {
    console.log();
  };
  const { data, isLoading, isFetching, isError, error, refetch } =
    useSuperHerosData(onSuccess, onError);
  const { mutate: addHero } = useAddSuperheroData();
  const deleteHero = useDeleteSuperHero(id);
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };
  const handleDelete = async (heroId) => {
    setId(heroId);
    await deleteHero.mutate(id);
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
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          <button onClick={() => handleDelete(hero.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
