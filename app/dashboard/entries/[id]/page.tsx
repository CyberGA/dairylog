"use client"

import EntryHeader from "@/components/entry-header";


export default function EntryDetails({ params }: { params: { id: string } }) {
  return (
    <>
      <EntryHeader />
      <div className="flex flex-col gap-2 font-quicksand w-full max-w-3xl mx-auto mb-3 py-10">
         <label htmlFor="title" className="mb-4 w-full">
              {/* <p className="text-cDark">Email Address</p> */}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title of entry"
                className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
              />
            </label>
            <label htmlFor="body" className="mb-4 w-full">
              <textarea
                name="body"
                id="body"
                placeholder="Body of entry"
                className="w-full h-[200px] max-h-[200px] px-4 py-2 border border-cGrey rounded-lg focus:outline-cBlue"
              />
            </label>
            <label htmlFor="dob" className="mb-4 w-full">
                <p className="text-cDark">Date of Entry</p>
                <input
                    type="date"
                    name="dob"
                    id="dob"
                    className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                />
            </label>
            <button className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300">
              Save
            </button>
      </div>
    </>
  );
}
