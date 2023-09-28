import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { data, isLoading, isFetching, error, isError } =
    useSuperHeroData(heroId);
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="">
      <p>
        {data?.data.alterEgo} - {data?.data.name}
      </p>
    </div>
  );
};

export default RQSuperHero;
