import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ herosId }) => {
  const results = useQueries(
    herosId?.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(results);
  return (
    <div>
      <h1>Dynamic Parallel</h1>
    </div>
  );
};

export default DynamicParallelPage;
