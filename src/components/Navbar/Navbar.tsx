// import Link from "next/link";
"use client";
import React, { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import logo from "../../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";

const Navbar: React.FC = (): JSX.Element => {
  const { data: session } = useSession();
  const [showLogin, setShowLogin] = useState(false);
  // const searchParams = useSearchParams();
  // const callbackUrl: string | null = searchParams.get('callbackUrl');
  console.log(session);

  return (
    <nav className="w-full  m-auto bg-white">
      <div className="navbar w-[90%] h-[120px] m-auto flex justify-between items-center bg-white main-container">
        <div className="logo_div w-[73px] h-[73px] max-[474px]:w-[65px] max-[440]:w-[55px]">
          <Link href={"/"}>
            <Image src={logo} alt="this is logo" className="cursor-pointer" />
          </Link>
        </div>
        <div className="search_div w-[665px] h-[40px] border border-[#008ECC] flex rounded">
          <input
            type="search"
            className="input_search flex-1 outline-none h-full px-2 bg-transparent"
            placeholder="Search"
          />
          <div className="search_select w-[145px] h-full  border border-[#008ECC]">
            <select className="search_option text-[14px] w-full h-full outline-none cursor-pointer bg-transparent flex justify-center items-center font-bold">
              <option value="">All Category</option>
            </select>
          </div>
          <button className="search_btn w-[100px] h-full  text-white border border-[#008ECC] bg-[#008ECC]">
            Search
          </button>
        </div>
        <div className="nav-icon flex items-center gap-3 ">
          <div className="cursor-pointer">
            <Link href={"/favourite"}>
              <FaHeart
                color="#8B96A5"
                size={18}
                className="cursor-pointer m-auto"
              />
              <p className="icon_text text-[12px] text-[#8B96A5] mt-1 font-[400]">
                Favourite
              </p>
            </Link>
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
                <p className="icon_text text-[12px] text-[#8B96A5] mt-1 font-[400]">
                  Profile
                </p>
              </div>
            ) : (
              // <Image
              //   src={session?.user?.image || ""}
              //   alt=""
              //   className="w-[45px] h-[45px] rounded-full cursor-pointer border"
              // />
              <div className=" cursor-pointer border text-center">
                Welocome, <br />
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
                    className="px-2 gap-1 h-[30px] border rounded-full text-sm flex justify-center items-center"
                    onClick={async () => {
                      await signIn();
                    }}
                  >
                    <FcGoogle size={20} />
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
