import React, { useState } from "react";

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
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
