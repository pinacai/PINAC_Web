"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebaseContext";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Navbar.module.css";

// image & icons
import logo from "@/public/assets/img/logo.svg";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar  = () => {
  const router = useRouter();
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
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleClick = () => {
    window.open("https://github.com/pinacai/PINAC_Workspace", "_blank");
  };

  // =========================================== //
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="PINAC Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#download">Download</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#docs">Docs</Link>
        </li>
        <li>
          <button id={styles.githubButton} onClick={handleClick}>
            Stars on GutHub
          </button>
        </li>
        <li>
          {user ? (
            <div className={styles.userContainer}>
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="user"
                  height={36}
                  width={36}
                  id="userAvatar"
                  className={styles.avatar}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <HiOutlineUserCircle
                  color="#ececec"
                  size={36}
                  id="userAvatar"
                  className={styles.avatar}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              )}
              {isDropdownOpen && (
                <div id="userDropdown" className={styles.dropdown}>
                  <div className={styles.dropdownHeader}>
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt="user"
                        height={43}
                        width={42}
                        className={styles.dropdownAvatar}
                      />
                    ) : (
                      <HiOutlineUserCircle
                        color="#ececec"
                        size={42}
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
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className={styles.dropdownItem}
                    onClick={() => router.push("/settings")}
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
              onClick={() => router.push("/auth/sign-in")}
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
