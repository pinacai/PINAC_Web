"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebaseContext";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";

// image & icons
import logo from "@/public/assets/img/logo.svg";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
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
    <nav className="h-9 w-[1065px] mx-7 mt-7 flex justify-between items-end sticky z-50">
      <div className="flex-1">
        <Image src={logo} alt="Pinac Logo" className="h-full" />
      </div>
      <ul className="flex items-center list-none gap-5 text-xl text-light font-Carme">
        <li>
          <Link
            href="#download"
            className="hover:border-b-2 hover:border-secondary"
          >
            Download
          </Link>
        </li>
        <li>
          <Link
            href="#pricing"
            className="hover:border-b-2 hover:border-secondary"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#docs"
            className="hover:border-b-2 hover:border-secondary"
          >
            Docs
          </Link>
        </li>
        <li>
          <button
            className="h-[30px] w-44 text-xl text-light font-Carme rounded-2xl bg-zinc-800 cursor-pointer"
            onClick={handleClick}
          >
            Stars on GutHub
          </button>
        </li>
        <li>
          {user ? (
            <div className="relative">
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="user"
                  height={36}
                  width={36}
                  id="userAvatar"
                  className="rounded-full cursor-pointer hover:opacity-80"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              ) : (
                <HiOutlineUserCircle
                  color="#ececec"
                  size={36}
                  id="userAvatar"
                  className="rounded-full cursor-pointer hover:opacity-80"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
              )}
              {isDropdownOpen && (
                <div
                  id="userDropdown"
                  className="w-[280px] py-2 top-overFull right-0 absolute leading-[90%] bg-[#0d1017] rounded-lg border-[1.5px] border-neutral-600 z-50"
                >
                  <div className="flex items-center p-4">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt="user"
                        height={43}
                        width={42}
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <HiOutlineUserCircle
                        color="#ececec"
                        size={42}
                        id="userAvatar"
                        className="rounded-full mr-3"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium text-white">
                        {user.displayName || "User"}
                      </span>
                      <span className="text-sm text-zinc-400">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <div className="h-[0.5px] bg-zinc-700 my-1.5" />
                  <button
                    className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme cursor-pointer hover:bg-[#171c25]"
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme cursor-pointer hover:bg-[#171c25]"
                    onClick={() => router.push("/settings")}
                  >
                    Settings
                  </button>
                  <div className="h-[0.5px] bg-zinc-700 my-1.5" />
                  <button
                    className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme cursor-pointer hover:bg-[#171c25]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="h-[30px] w-[85px] text-black rounded-2xl text-xl font-Carme bg-secondary cursor-pointer hover:bg-[#171c25]"
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
