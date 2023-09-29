import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError || error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div
              style={{ background: color.color, width: `${color.id * 50}px` }}
              key={color.id}
            >
              <h4>{color.color}</h4>
            </div>
          );
        })}
        <button
          onClick={() =>
            setPageNumber((prevState) => {
              return prevState + 1;
            })
          }
        >
          Next Page
        </button>

        <button
          onClick={() =>
            setPageNumber((prevState) => {
              return prevState - 1;
            })
          }
          disabled={pageNumber === 1}
        >
          previous Page
        </button>
        {isFetching && <p>loading</p>}
      </div>
    </>
  );
};

export default PaginatedQueriesPage;
