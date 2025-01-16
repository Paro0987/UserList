import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css'; 

const UserDetailPage = () => {
  const { state: user } = useLocation(); 
  const navigate = useNavigate();

  if (!user) {
    return <p>User not found</p>; 
  }

  return (
    <div className="user-detail-container"> {/* Center the card */}
      <div className="card"> {/* Card container */}
        <h1>User Details</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default UserDetailPage;
