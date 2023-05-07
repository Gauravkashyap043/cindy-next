// import Link from "next/link";
"use client";
import React, { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FaSearch, FaRegHeart, FaHeart, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import logo from "../../../assets/images/logo.png"

const Navbar: React.FC = () : JSX.Element => {
  const { data: session } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  const searchParams = useSearchParams();
  // const callbackUrl: string | null = searchParams.get('callbackUrl');
  console.log(session);

  return (
    <nav className="w-full h-[120px] m-auto bg-white">
      <div className="w-[75%] min-[1608px]:w-[75%] min-[1400px]:w-[90%] min-[1344px]:w-[95%] min-[1270px]:w-[98%] max-[1270px]:w-[98%] m-auto h-full flex justify-between items-center bg-white main-container">
        <div className="w-[73px] h-[73px] max-[474px]:w-[65px] max-[440]:w-[55px]">
          <Image src={logo} alt="this is logo" className="cursor-pointer" />
        </div>
        <div className="navbar-div w-[21rem] min-[812px]:w-[20rem] min-[770px]:w-[18rem] m-auto  border flex items-center gap-2 rounded-full py-[12px] px-[21px]">
          <div>
            <FaSearch color="gray" />
          </div>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="flex-1 px-2 outline-none cursor-auto bg-transparent"
          />
        </div>
        <div className="flex items-center gap-2 ">
          <FaRegHeart color="gray" size={23} className="cursor-pointer" />
          <div
            className="relative rounded-full flex justify-center items-center"
            onClick={() => setShowLogin(!showLogin)}
          >
            {!session ? (
              <FaRegUser color="gray" size={23} className="cursor-pointer" />
            ) : (
              // <Image
              //   src={session?.user?.image || ""}
              //   alt=""
              //   className="w-[45px] h-[45px] rounded-full cursor-pointer border"
              // />
              <div className=" cursor-pointer border">
                  {!!session && session?.user?.name}
              </div>
              
            )}

            {showLogin && (
              <div className="absolute border w-[221px] h-[114px] top-10 right-0 flex justify-center items-center bg-white rounded-lg">
                {session ? (
                  <button
                    className="w-[150px] h-[30px] border rounded-full text-sm"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="w-[150px] h-[30px] border rounded-full text-sm"
                    onClick={() => signIn("google")}
                  >
                    Login with Google
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
