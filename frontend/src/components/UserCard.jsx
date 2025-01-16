import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./HomePage";
import { fetchData } from "../Redux/action";
import '../App.css';

const UserCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch, url]);

  return (
    <div className="user-card">
      {user.loading ? (
        <div className="loader"></div>
      ) : user.error ? (
        <div className="error">Failed to fetch Users. Please try again later.</div>
      ) : (
        <HomePage userData={user.data} />
      )}
    </div>
  );
};

export default UserCard;
