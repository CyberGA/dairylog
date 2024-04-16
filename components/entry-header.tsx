"use client"

import { IoHome } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { SlArrowLeft } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { instance } from "@/lib/axios";
import requests from "@/lib/requests";
import { useEntriesContext } from "@/contexts/entries-context";
import { toast } from "sonner";

export default function EntryHeader() {
    const router = useRouter();
    const {selectedEntry} = useEntriesContext()

    function backClickHandler() {
        router.back()
    }

    function deleteEntry() {
      if (!selectedEntry) return;

        toast.loading("Deleting your entry")
        instance
          .delete(`${requests.entries}/${selectedEntry["title"]}`)
          .then((res) => {
            toast.dismiss();
            toast.success("Deleted successfully");
            router.push("/dashboard/entries");
          })
          .catch((err) => {
            if (err.response["data"] && err.response["data"]["detail"]) {
              toast.error(err.response["data"]["detail"]);
            } else {
              toast.error("An error has occurred");
            }
          });
    }

  return (
    <div className="bg-[#9c9c9c3b] px-7 sm:px-8 py-2">
      <div className="flex gap-3">
        <div
          onClick={backClickHandler}
          title="Go back"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <SlArrowLeft />
        </div>
        <div
          onClick={() => router.push("/dashboard/entries")}
          title="Home"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <IoHome />
        </div>
        <div
          onClick={deleteEntry}
          title="Delete Entry"
          className="w-fit flex items-center gap-1 h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
        >
          <FaRegTrashCan />
        </div>
      </div>
    </div>
  );
}
