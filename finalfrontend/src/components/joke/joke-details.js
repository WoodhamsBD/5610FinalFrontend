import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findJokeByIDThunk } from "./joke-thunks";
import { createCommentThunk, findCommentsByAuthorThunk, findCommentsByJokeIDThunk } from "../comments/comment-thunks";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const JokeDetails = () => {
  const { jokeID } = useParams();
  const [comment, setComment] = useState('');
  const { details } = useSelector((state) => state.joke);

  const {currentUser} = useSelector((state) => state.users);

  const {comments} = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findJokeByIDThunk(jokeID))
    dispatch(findCommentsByJokeIDThunk(jokeID))
  }, [jokeID]);

  const handlePostCommentButton = () => {
    dispatch(createCommentThunk({
      comment,
      jokeID
    }))
  }

  return (
    <>
      <h1>Joke Details:</h1>
      <div className="row" align="center">
        <p>{details.joke}</p>
      </div>
      {
        currentUser && 
        <div className="mt-3" align="center">
          <textarea onChange={(e) => setComment(e.target.value)} className="form-control"></textarea>
          <button className="btn btn-primary" onClick={handlePostCommentButton}>Post Comment</button>
        </div>
      }

      <ul className="list-group">
        {
          comments.map((comment) => 
            <li className="list-group-item border-0">
              {comment.comment}
              {/* <Link to={`/profile/${comment.author._id}`} className="float-end"> */}
              {comment.author.username}     
              {/* </Link> */}
              {/*  */}
            </li>
          )
        }
      </ul>
    </>
  );
};

export default JokeDetails;
