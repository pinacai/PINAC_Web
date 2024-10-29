import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../context/Firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import styles from "./styles/Navbar.module.css";

// image & icons
import logo from "../../../assets/img/logo.svg";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("userDropdown");
      const avatar = document.getElementById("userAvatar");

      if (dropdown && avatar) {
        if (
          !dropdown.contains(event.target as Node) &&
          !avatar.contains(event.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // =========================================== //
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PINAC Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#download">Download</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#docs">Docs</a>
        </li>
        <li>
          <button id={styles.githubButton}>Stars on GutHub</button>
        </li>
        <li>
          {user ? (
            <div className={styles.userContainer}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  id="userAvatar"
                  className={styles.avatar}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <HiOutlineUserCircle
                  color="#ececec"
                  id="userAvatar"
                  className={styles.avatar}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              )}
              {isDropdownOpen && (
                <div id="userDropdown" className={styles.dropdown}>
                  <div className={styles.dropdownHeader}>
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="user"
                        className={styles.dropdownAvatar}
                      />
                    ) : (
                      <HiOutlineUserCircle
                        color="#ececec"
                        id="userAvatar"
                        className={styles.dropdownAvatar}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.userName}>
                        {user.displayName || "User"}
                      </span>
                      <span className={styles.userEmail}>{user.email}</span>
                    </div>
                  </div>
                  <div className={styles.dropdownDivider} />
                  <button
                    className={styles.dropdownItem}
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className={styles.dropdownItem}
                    onClick={() => navigate("/settings")}
                  >
                    Settings
                  </button>
                  <div className={styles.dropdownDivider} />
                  <button
                    className={styles.dropdownItem}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              id={styles.signinButton}
              onClick={() => navigate("/signup")}
            >
              Sign In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
