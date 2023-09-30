import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueryPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else return undefined;
    },
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError || error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data?.pages.map((group, i) => {
        return (
          <div key={i}>
            {group.data.map((color) => (
              <div
                style={{ background: color.color, width: `${color.id * 50}px` }}
                key={color.id}
              >
                <h4>{color.color}</h4>
              </div>
            ))}
          </div>
        );
      })}
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        Load More
      </button>
      <div>{isFetching && !isFetchingNextPage ? "fetching ..." : null}</div>
    </div>
  );
};

export default InfiniteQueryPage;
