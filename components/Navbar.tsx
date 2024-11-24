"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebaseContext";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";

// icons
import Logo from "@/public/assets/img/logo.svg";
import { FaRegCircleUser } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("userDropdown");
      const avatar = document.getElementById("userAvatar");
      const mobileMenu = document.getElementById("mobileMenu");
      const hamburger = document.getElementById("hamburgerButton");

      if (dropdown && avatar) {
        if (
          !dropdown.contains(event.target as Node) &&
          !avatar.contains(event.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      }

      if (mobileMenu && hamburger) {
        if (
          !mobileMenu.contains(event.target as Node) &&
          !hamburger.contains(event.target as Node)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // function to handle GitHub button
  const handleClick = () => {
    window.open("https://github.com/pinacai/PINAC_Workspace", "_blank");
  };

  // NavLinks
  const NavLinks = ({ docName }: { docName: string }) => (
    <>
      <li>
        <Link
          href="#download"
          className="hover:border-b-2 hover:border-secondary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Download
        </Link>
      </li>
      <li>
        <Link
          href="#pricing"
          className="hover:border-b-2 hover:border-secondary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="#docs"
          className="hover:border-b-2 hover:border-secondary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {docName}
        </Link>
      </li>
      {/*   GitHub Button   */}
      {/* ================= */}
      <li className="w-full xl:w-auto">
        <button
          className="h-[30px] w-full px-3 text-lg text-light font-Carme rounded-2xl bg-zinc-800 hover:bg-zinc-700
                      flex items-center justify-center cursor-pointer"
          onClick={() => {
            handleClick();
            setIsMobileMenuOpen(false);
          }}
        >
          <ImGithub className="xl:h-[18px] w-auto mr-2" />
          GitHub
        </button>
      </li>
    </>
  );

  // User Section after login or Signup button
  const UserSection = () => (
    <li className="w-full xl:w-auto">
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
            <FaRegCircleUser
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
                  <FaRegCircleUser
                    color="#ececec"
                    size={42}
                    className="rounded-full mr-3"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-medium text-white">
                    {user.displayName || "User"}
                  </span>
                  <span className="text-sm text-zinc-400">{user.email}</span>
                </div>
              </div>
              <div className="h-[0.5px] bg-zinc-700 my-1.5" />
              <button
                className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme cursor-pointer hover:bg-[#171c25]"
                onClick={() => {
                  router.push("/profile");
                  setIsMobileMenuOpen(false);
                }}
              >
                Profile
              </button>
              <button
                className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme cursor-pointer hover:bg-[#171c25]"
                onClick={() => {
                  router.push("/settings");
                  setIsMobileMenuOpen(false);
                }}
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
        // Sign in button
        <button
          className="h-[30px] w-full xl:w-[85px] text-black rounded-2xl text-xl font-Carme bg-secondary cursor-pointer"
          onClick={() => {
            router.push("/auth/sign-in");
            setIsMobileMenuOpen(false);
          }}
        >
          Sign In
        </button>
      )}
    </li>
  );

  return (
    <nav className="w-full px-4 md:px-7 mt-7 sticky z-50">
      <div className="3xl:w-10/12 md:w-10/12 xs:w-full mx-auto flex flex-col xl:flex-row xl:items-end">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="Pinac Logo" className="h-[30px] w-auto" />

          {/* Hamburger Menu Button */}
          <button
            id="hamburgerButton"
            className="xl:hidden h-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <RxCross2 className="h-[30px] w-auto text-light" />
            ) : (
              <IoMenuOutline className="h-[30px] w-auto text-light" />
            )}
          </button>
        </div>

        {/*    Desktop Menu    */}
        {/* ================== */}
        <ul className="hidden xl:flex items-center list-none gap-5 text-xl text-light font-Carme ml-auto">
          <NavLinks docName="Docs" />
          <UserSection />
        </ul>

        {/*    Mobile Menu    */}
        {/* ================= */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenu"
            className="xl:hidden fixed inset-x-0 top-[88px] bg-[#0d1017] border-y border-neutral-600 z-40"
          >
            <ul className="flex flex-col items-center gap-6 p-6 text-xl text-light font-Carme">
              <NavLinks docName="View Docs" />
              <UserSection />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
