"use client"

import { IoHome } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { useRouter } from "next/navigation";

export default function EntryHeader() {
    const router = useRouter();

    function backClickHandler() {
        router.back()
    }

  return (
    <div className="bg-[#9c9c9c3b] px-7 sm:px-8 py-2">
      <div className="flex gap-3">
        <div
          onClick={backClickHandler}
          title="New Entry"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <SlArrowLeft />
        </div>
        <div
          title="New Entry"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <IoHome />
        </div>
        <div
          title="Delete Entry"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <FaRegTrashCan />
        </div>
      </div>
    </div>
  );
}
