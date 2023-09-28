import axios from "axios";
import { useQuery } from "react-query";

const fetchData = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroData = (id) => {
  return useQuery(["super-hero", id], () => fetchData(id));
};
