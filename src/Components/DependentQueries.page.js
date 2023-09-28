import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchChannels = (id) => {
  return axios.get(`http://localhost:4000/channels/${id}`);
};
const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUsers(email));
  const channelId = user?.data.channelId;
  const { data: channels } = useQuery(
    ["courses", channelId],
    () => fetchChannels(channelId),
    {
      enabled: !!channelId,
    }
  );
  return (
    <div>
      <h1>Dependent Queries</h1>
      <h4>user {user?.data.channelId} courses</h4>
      <ul>
        {channels?.data.courses.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DependentQueriesPage;
