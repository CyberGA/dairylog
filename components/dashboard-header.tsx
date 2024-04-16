"use client"

import Image from "next/image";
import { FaPowerOff } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const router = useRouter();

  function logoutHandler() {
    localStorage.clear();
    router.push("/login")
  }
  return (
    <>
      <div className="sticky z-[99] top-0 font-quicksand duration-300">
        <div className="flex items-center justify-between px-7 sm:px-8 py-4 bg-cBlue">
          <div className="">
            <Image
              src="/images/brand-logo-white.svg"
              alt="Brand logo"
              width={80}
              height={24}
              style={{
                height: "auto",
              }}
              priority
            />
          </div>
          <div className="flex gap-2">
            <div onClick={() => router.push("/dashboard/entries/new")} title="New Entry" className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md cursor-pointer hover:text-cBlue font-semibold duration-300">
              <TfiWrite /> Create New Entry
            </div>
            {/* <div onClick={logoutHandler} className="flex items-center gap-1 cursor-pointer hover:scale-105 duration-300">
              <FaPowerOff color="#fff" size="14px" />
              <p className="text-white font-semibold">Logout</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
