"use client";

import { useEntriesContext } from "@/contexts/entries-context";
import { useRouter } from "next/navigation";

interface EntryProps {
  id?: string;
  date?: string;
  content?: string;
  title?: string;
}

const Entry: React.FC<EntryProps> = ({ id, date, content, title }) => {
  const router = useRouter();
  const { setSelectedEntry } = useEntriesContext();

  function clickHandler() {
    setSelectedEntry({ id: id, date: date, content: content, title: title });
    router.push(`/dashboard/entries/${id}`);
  }

  return (
    <div className="flex gap-2 font-quicksand w-full max-w-4xl mx-auto mb-3 px-6">
      <div>
        <p className="font-bungee text-2xl font-bold">13</p>
        <p className="text-xl uppercase text-black/30">April</p>
        <p className="uppercase text-black/30">11:02</p>
        <p className="uppercase text-black/30">AM</p>
      </div>
      <div
        onClick={clickHandler}
        className="w-full hover:border hover:border-black/10 hover:bg-white rounded-md px-5 py-5 duration-300 cursor-pointer"
      >
        <div className="flex justify-between gap-4">
          <p className="text-xl font-semibold">{title}</p>
          {/* <div
            title="Delete Entry"
            className="w-fit h-auto bg-action p-3 rounded-md hover:border hover:border-black/10 duration-300 cursor-pointer"
          >
            <FaRegTrashCan />
          </div> */}
        </div>
        <p className="">{content?.substring(0, 150) }{content && content?.length > 150 ? "..." : ""}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Entry;
