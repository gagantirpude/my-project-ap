import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";

function ProfileComponent({ username, onLogout, onSettings, profileImage }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="profile">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
        onClick={toggleDropdown}
      />
      {showDropdown && (
        <div className="dropdown-menu">
          <ul>
            <li>{username}</li>
            <li onClick={onSettings}>Settings</li>
            <li onClick={onLogout}>Logout</li>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="*">
                  <div className="custom-link">
                    <img src="profile.png" alt="" />
                    <span>404 page</span>
                  </div>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
