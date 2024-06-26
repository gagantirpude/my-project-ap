import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { toast } from "react-hot-toast";
import ProfileComponent from "./ProfileComponent";

import { Link } from "react-router-dom";
import "../styles/dropdown.scss";

function Header({ OpenSidebar }) {
  // Use toast to display success or error messages
  // const { success, error } = useToasts();

  // Mock user data
  const user = {
    username: "Neha",
    profileImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fh8-Tk_BjUMBasKF0NWk2QHaHa%26pid%3DApi&f=1&ipt=aa96d139742fb4f48c55c848522b65c2febd16bc87e14866932e5b19cb943385&ipo=images", // URL to user's profile image
  };

  const handleLogout = () => {
    // Handle logout logic here
    toast.success("Logout Successful Neha!");
    console.log("Logging out...");
  };

  const handleSettings = () => {
    // Handle settings logic here
    toast.error("Please contact admin for settings!");
    console.log("Navigating to settings...");
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
