export default function Page() {
  return (
    <div className="bg-[url('/images/contact.jpg')] flex px-5 bg-no-repeat bg-cover bg-center relative z-0 h-[90vh] font-quicksand">
      <div className="absolute z-1 top-0 bottom-0 right-0 left-0 bg-black/60 "></div>
      <div className="max-w-xl m-auto bg-white shadow-lg px-4 rounded-md relative z-[2]">
        <div className="max-w-md mx-auto flex flex-col gap-2  py-7 px-4 ">
          <div className="mb-5 text-cDark">
            <h1 className="text-[34px] tex font-bold font-bungee text-cBlue">
              Get in Touch
            </h1>
            <p>
              Have a question or feedback? <br /> Fill out the form and we will
              be in touch shortly.
            </p>
          </div>
          <label htmlFor="name" className="mb-4 w-full">
            {/* <p className="text-cDark">Name</p> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
            />
          </label>
          <label htmlFor="email" className="mb-4 w-full">
            {/* <p className="text-cDark">Email Address</p> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
            />
          </label>
          <label htmlFor="message" className="mb-4 w-full">
            {/* <p className="text-cDark">Your Message</p> */}
            <textarea
              name="message"
              id="message"
              placeholder="Write a message..."
              className="w-full h-[200px] px-4 py-2 border border-cGrey rounded-lg focus:outline-cBlue"
            />
          </label>
          <button className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
