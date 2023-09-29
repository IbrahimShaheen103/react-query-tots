import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchData = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroData = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", id], () => fetchData(id), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === id);
      if (hero) {
        return {
          data: hero,
        };
      } else return undefined;
    },
  });
};
