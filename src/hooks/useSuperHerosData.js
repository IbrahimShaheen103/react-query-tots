import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchData, {
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((hero) => hero.name);
    },
  });
};
