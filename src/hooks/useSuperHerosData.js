import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchData = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};
const deleteSuperHero = (id) => {
  return axios.delete(`http://localhost:4000/superheroes/${id}`);
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

export const useDeleteSuperHero = (id) => {
  const queryClint = useQueryClient();

  return useMutation(() => deleteSuperHero(id), {
    onSuccess: () => {
      queryClint.invalidateQueries("super-heroes");
    },
  });
};
