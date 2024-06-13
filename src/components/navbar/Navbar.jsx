import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase"
import { useNavigate } from "react-router-dom";
import Procedures from "../../pages/procedures/procedures";

const Navbar = ({email}) => {
  const { dispatch } = useContext(DarkModeContext);
  const [loggedIn, setLoggedIn] = useState(auth);
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleUsersClick = () => {
    navigate(`/users?email=${email}`); // Use email from props
  };

  const signOutHandler = () => {
    signOut(auth).then(() => {
    }).catch((error) => {});
    setLoggedIn(false);
    navigate("../../login");
  }

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <nav className="nav-container">
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="logo">
                <a href="#" className="nav-logo">
                  <img
                      onClick={() => navigate("/")}
                      height="40px" viewBox="0 -960 960 960" width="80px"
                      src="healthsync.png"
                      alt=""
                      className="avatar"
                  />
                </a>
              </li>
              <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchOutlinedIcon />
              </div>
              <li className="hideOnMobile">
                <a href="#" className="nav-link" onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="hideOnMobile">
                <a href="#" className="nav-link" onClick={() => {
                  const email = localStorage.getItem("loggedInUserEmail");
                  if (email) {
                    navigate(`/users?email=${email}`);
                  } else {
                  }
                }}>Users</a>
              </li>
              <li className="hideOnMobile">
                <a href="#" className="nav-link" onClick={() => navigate("/procedures")}>Procedures</a>
              </li>
              <li className="hideOnMobile">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="hideOnMobile">
                <a href="#" className="logoutbtn" onClick={signOutHandler}>Logout</a>
              </li>
              <li className="menubtn" onClick={showSidebar}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="sidebar" style={{ display: isSidebarVisible ? 'flex' : 'none' }}>
              <li className="nav-item" onClick={closeSidebar}>
                <a href="#" className="close">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => navigate("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => {
                  const email = localStorage.getItem("loggedInUserEmail");
                  if (email) {
                    navigate(`/users?email=${email}`);
                  } else {
                  }
                }}>Users</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={() => navigate("/procedures")}>Procedures</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="logoutbtn" onClick={signOutHandler}>Logout</a>
              </li>
            </ul>
            </div>
          </nav>
      </div>
    </div>
  );
};

export default Navbar;
