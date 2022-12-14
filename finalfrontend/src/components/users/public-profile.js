import {useParams} from "react-router"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"

import { findUserByIdThunk } from "./users-thunk"
import { findCommentsByAuthorThunk } from "../comments/comment-thunks"



const PublicProfile = () => {
  const{ jokeID } = useParams()

  const{publicProfile} = useSelector((state) => state.users)
  const{comments} = useSelector((state) => state.comments)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findUserByIdThunk(jokeID))
    dispatch(findCommentsByAuthorThunk(jokeID))
  }, [jokeID])

  return(
    <>
    <div className="row">
    <h1>{publicProfile && publicProfile.username}</h1>
    </div>

    <ul className="list-group">
      {
        // console.log(comments)
        comments && comments.map((comment) => {
          <li className="list-group-item">
            {comment}
          </li>
        })
      }
    </ul>

    </>
  )
}

export default PublicProfile