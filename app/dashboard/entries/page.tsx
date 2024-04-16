"use client";

import Entry from "@/components/entry";
import Loader from "@/components/loader";
import { instance } from "@/lib/axios";
import requests from "@/lib/requests";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  function getEntries() {
    setLoading(true);
    instance
      .get(requests.entries)
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => {
        if (err.response["data"] && err.response["data"]["detail"]) {
          toast.error(err.response["data"]["detail"]);
        } else {
          toast.error("An error has occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getEntries();
    toast.dismiss()
  }, []);

  return (
    <div className="px-5 py-6 font-quicksand">
      {loading && (
        <div className="flex flex-col gap-1 mt-5 text-center">
          <p>Getting your diary entries</p>
          <Loader />
        </div>
      )}
      {!loading &&
        entries?.map((entry) => (
          <Entry
            key={entry["id"]}
            id={entry["id"]}
            title={entry["title"]}
            content={entry["entry"]}
          />
        ))}
    </div>
  );
}
