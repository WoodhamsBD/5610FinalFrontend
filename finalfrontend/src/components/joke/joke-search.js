import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findJokeForTermThunk } from "./joke-thunks";
import {Link} from "react-router-dom";

const JokeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { jokes, loading } = useSelector((state) => state.joke);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findJokeForTermThunk(searchTerm));
  }, []);

  return (
    <>
      <h1>Enter a term and find corresponding jokes</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              dispatch(findJokeForTermThunk(searchTerm));
            }}
          >
            Search
          </button>
          <input
            className="form-control w-75"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
        </li>
        {
          jokes && jokes.map((joke) =>
          <li key={joke.id} className="list-group-item"><Link to={`/details/${joke.id}`}>{joke.joke}</Link></li>
          )
        }

      </ul>
      {/* {JSON.stringify(jokes, null, 2)} */}
    </>
  );
};

export default JokeSearch;
