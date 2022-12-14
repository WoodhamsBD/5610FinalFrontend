import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { findRandomJokeThunk } from "./joke-thunks";

const Joke = () => {
  const joke = useSelector((state) => state.joke);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findRandomJokeThunk());
  }, []);

  return (
    <>
      <h1>Receive a random Joke!</h1>
      <div className="m-3" align="center">
        <button
          className="btn btn-primary center"
          onClick={() => {
            dispatch(findRandomJokeThunk());
          }}
        >
          Fetch Another!
        </button>
      </div>
      <div classname="" align="center">
        <p>{joke.joke.joke}</p>
      </div>
    </>
  );
};

export default Joke;
