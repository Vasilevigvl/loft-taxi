import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginForm } from "./LoginForm";

export const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <p>
          You are logged in. <Link to="/profile">Go to profile</Link>
        </p>
      ) : (
        <LoginForm/>
      )}
    </>
  );
};