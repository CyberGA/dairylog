"use client";

import EntryHeader from "@/components/entry-header";
import Loader from "@/components/loader";
import { useEntriesContext } from "@/contexts/entries-context";
import { useGlobalContext } from "@/contexts/global-context";
import { instance } from "@/lib/axios";
import requests from "@/lib/requests";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EntryDetails({ params }: { params: { id: string } }) {
  const { selectedEntry } = useEntriesContext();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useGlobalContext();

  function saveHandler() {
    if (!user) return;
    if (!title.length || !content.length) {
      toast.error("Cannot add empty entry");
      return;
    }

    setLoading((prev) => true);
    instance
      .put(`${requests.entries}?user_name=${user["username"]}`, {
        id: params.id,
        title,
        entry: content,
      })
      .then((res) => {
        toast.success("Updated Successfully");
      })
      .catch((err) => {
        if (err.response["data"] && err.response["data"]["detail"]) {
          toast.error(err.response["data"]["detail"]);
        } else {
          toast.error("An error has occurred");
        }
      })
      .finally(() => {
        setLoading((prev) => false);
      });
  }

  useEffect(() => {
    if (selectedEntry) {
      setTitle(selectedEntry.title);
      setContent(selectedEntry.content);
    }
  }, [selectedEntry]);

  return (
    <>
      <EntryHeader />
      <div className="flex flex-col gap-2 font-quicksand w-full max-w-3xl mx-auto mb-3 py-10">
        <label htmlFor="title" className="mb-4 w-full">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle((prev) => e.target.value)}
            placeholder="Title of entry"
            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
          />
        </label>
        <label htmlFor="body" className="mb-4 w-full">
          <textarea
            name="body"
            id="body"
            value={content}
            onChange={(e) => setContent((prev) => e.target.value)}
            placeholder="Body of entry"
            className="w-full h-[200px] max-h-[200px] px-4 py-2 border border-cGrey rounded-lg focus:outline-cBlue"
          />
        </label>
        {/* <label htmlFor="date" className="mb-4 w-full">
          <p className="text-cDark">Date of Entry</p>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
          />
        </label> */}
        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={saveHandler}
            className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300"
          >
            Save
          </button>
        )}
      </div>
    </>
  );
}
