import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchData, {
    onSuccess,
    onError,
  });
};

export const useAddSuperheroData = () => {
  const queryClint = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClint.invalidateQueries("super-heroes");
    },
  });
};
