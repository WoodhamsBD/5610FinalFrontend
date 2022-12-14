import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";


// Components
import Nav from "./components/navigation/nav";
import CurrentUser from "./components/users/current-user";
import usersReducer from "./components/users/users-reducer";
// import Landing from "./components/main/index";
import ProtectedRoute from "./components/users/protected-route";
import Users from "./components/users";
import Login from "./components/users/login";
import Register from "./components/users/register";
import Profile from "./components/users/profile";

import Joke from "./components/joke/joke"
import JokeSearch from "./components/joke/joke-search";
import randomJokeReducer from './components/joke/joke-reducer'
import JokeDetails from "./components/joke/joke-details";
import commentReducer from "./components/comments/comment-reducer";
import PublicProfile from "./components/users/public-profile"

const store = configureStore({
  reducer: {
    users: usersReducer,
    joke: randomJokeReducer,
    comments: commentReducer
  },
});

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <Nav />
            <Routes>
              <Route index element={<Joke />}/>
              <Route path="/search" element={<JokeSearch />} />
              <Route path="/users" element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              } />
              <Route path="/details/:jokeID" element={<JokeDetails />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>
                            </ProtectedRoute>
                            }/>     
              <Route path="/profile/:uid" element={<PublicProfile/>}/>                                     
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
