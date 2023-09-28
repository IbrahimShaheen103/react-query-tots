import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
const ParallelQueries = () => {
  const { data: superheroes } = useQuery("superhero", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);
  console.log(friends.data);
  return (
    <div>
      <h1>Parallel Queries</h1>
      <div className="flex">
        <ul>
          {superheroes?.data.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
        <ul>
          {friends?.data.map((friend) => (
            <li key={friend.id}>{friend?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParallelQueries;
