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

  // Effect to handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position and lock scroll
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [isMobileMenuOpen]);

  //
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
      <li className="xl:p-0 pl-1">
        <Link
          href="#download"
          className="hover:border-b-2 hover:border-secondary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Download
        </Link>
      </li>
      <li className="xl:p-0 pl-1">
        <Link
          href="#pricing"
          className="hover:border-b-2 hover:border-secondary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Pricing
        </Link>
      </li>
      <li className="xl:p-0 pl-1">
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
          className="xl:h-[30px] h-9 w-full px-3 text-xl text-light font-Carme bg-zinc-800 hover:bg-zinc-700
                      flex items-center justify-center cursor-pointer xl:rounded-2xl rounded-lg"
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

  //
  const UserSection = () => (
    <>
      <div
        className="flex items-center px-4 py-6  rounded-t-lg hover:bg-[#171c25] cursor-pointer"
        onClick={() => {
          router.push("/profile");
          setIsDropdownOpen(false);
        }}
      >
        {user?.photoURL ? (
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
            {user?.displayName || "User"}
          </span>
          <span className="text-sm text-zinc-400">{user?.email}</span>
        </div>
      </div>
      <div className="h-[0.5px] bg-zinc-700" />
      <button
        className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme rounded-b-lg cursor-pointer hover:bg-[#171c25]"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );

  return (
    <nav className="w-full px-4 md:px-7 md:mt-7 mt-4 sticky z-50">
      <div className="3xl:w-10/12 md:w-10/12 xs:w-full mx-auto flex flex-col xl:flex-row xl:items-end">
        <div className="flex justify-between items-center">
          <Image
            src={Logo}
            alt="Pinac Logo"
            className="md:h-[30px] w-auto h-[25px]"
          />

          {/*     Mobile Menu Button     */}
          {/* ========================== */}
          <button
            className="xl:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`absolute transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "rotate-90 scale-100 opacity-100"
                  : "rotate-0 scale-0 opacity-0"
              }`}
            >
              <RxCross2 size={30} className="text-zinc-500" />
            </div>
            <div
              className={`absolute transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <IoMenuOutline size={30} className="text-zinc-300" />
            </div>
          </button>
        </div>

        {/*    Desktop Menu     */}
        {/* =================== */}
        <ul className="hidden xl:flex items-center list-none gap-5 text-xl text-light font-Carme ml-auto">
          <NavLinks docName="Docs" />
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
                    className="w-[280px] top-overFull right-0 absolute leading-[90%] bg-[#0d1017] rounded-lg border-[1.5px] border-neutral-600 z-50"
                  >
                    <UserSection />
                  </div>
                )}
              </div>
            ) : (
              // Sign in button
              <button
                className="h-[30px] w-[85px] text-black text-xl font-Carme bg-secondary rounded-2xl cursor-pointer"
                onClick={() => router.push("/auth/sign-in")}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>

        {/*    Mobile Menu    */}
        {/* ================= */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenu"
            className="xl:hidden inset-x-0 bg-primary z-50 h-screen"
          >
            <ul
              className="flex flex-col justify-center list-none pt-16 pb-3 gap-6
                        md:text-xl text-lg text-light font-Carme"
            >
              <li>
                {user && (
                  <div className="bg-glass-on-primary rounded-lg border-[0.3px] border-zinc-600">
                    <UserSection />
                  </div>
                )}
              </li>
              <NavLinks docName="View Docs" />
              {!user && (
                // Sign in button
                <li>
                  <button
                    className="h-9 w-full text-black text-xl font-Carme bg-secondary rounded-lg cursor-pointer"
                    onClick={() => {
                      router.push("/auth/sign-in");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
