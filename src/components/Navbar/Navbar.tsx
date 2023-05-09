// import Link from "next/link";
"use client";
import React, { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FaSearch, FaRegHeart, FaHeart, FaRegUser,FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import logo from "../../../assets/images/logo.png";

const Navbar: React.FC = (): JSX.Element => {
  const { data: session } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  const searchParams = useSearchParams();
  // const callbackUrl: string | null = searchParams.get('callbackUrl');
  console.log(session);

  return (
    <nav className="w-full  m-auto bg-white">
      <div className="w-[90%] h-[120px] m-auto flex justify-between items-center bg-white main-container">
        <div className="w-[73px] h-[73px] max-[474px]:w-[65px] max-[440]:w-[55px]">
          <Image src={logo} alt="this is logo" className="cursor-pointer" />
        </div>
        <div className="navbar-div w-[665px] h-[40px] border border-[#0039f0] flex rounded">
          <input
            type="search"
            className="flex-1 outline-none h-full px-2 bg-transparent"
            placeholder="Search"
          />
          <div className="w-[145px] h-full  border border-blue-600">
            <select className=" text-[14px] w-full h-full outline-none cursor-pointer">
              <option value="">All Category</option>
            </select>
          </div>
          <button className="w-[100px] h-full  text-white border border-blue-700 bg-[#0039f0]">
            Search
          </button>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="cursor-pointer">
            <FaHeart color="#8B96A5" size={18} className="cursor-pointer m-auto" />
            <p className="text-[12px] text-[#8B96A5] mt-1 font-[400]">Favourite</p>
          </div>
          <div
            className="relative rounded-full flex justify-center items-center"
            onClick={() => setShowLogin(!showLogin)}
          >
            {!session ? (
              <div className="cursor-pointer">
                <FaUserAlt
                  color="#8B96A5"
                  size={18}
                  className="cursor-pointer m-auto"
                />
                <p className="text-[12px] text-[#8B96A5] mt-1 font-[400]">Profile</p>
              </div>
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
                    onClick={async () => {
                      await signIn();
                    }}
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
