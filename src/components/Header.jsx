import React, { useState } from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import ProfileComponent from "./ProfileComponent";
import CalendarComponent from "./CalendarComponent";
import "../styles/demo3.scss";

function Header({ OpenSidebar }) {
  // Mock user data
  const user = {
    username: "JohnDoe",
    profileImage:
      "https://qph.cf2.quoracdn.net/main-qimg-8578910fde7d932c3ff42291113a2a5f-lq", // URL to user's profile image
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
  };

  const handleSettings = () => {
    // Handle settings logic here
    console.log("Navigating to settings...");
  };

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (year, month) => {
    // Add your logic for handling selected date here
    console.log("Selected month:", month);
    console.log("Selected year:", year);
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <div className="calendar-dropdown">
          <button className="icon" onClick={toggleCalendar}>
            Calendar
          </button>
          {showCalendar && (
            <CalendarComponent onChangeMonth={handleDateSelect} />
          )}
        </div>

        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <div className="profile-dropdown">
          <ProfileComponent
            username={user.username}
            profileImage={user.profileImage}
            onLogout={handleLogout}
            onSettings={handleSettings}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
