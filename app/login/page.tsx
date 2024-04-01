import Link from "next/link";

export default function Page() {
    return (
        <div className="px-10 flex justify-center flex-col font-quicksand pb-8">
            <div className="max-w-md mx-auto flex flex-col items-center">
                <div className="w-full my-12">
                    <h1 className="text-3xl text-cDark leading-tight font-bungee">
                        Login to your account
                    </h1>
                    <p className="text-cGrey/15 mt-1">
                        Are you new?{" "}
                        <Link
                            href="/register"
                            className="text-cBlue underline underline-offset-[3px] hover:font-semibold duration-300"
                        >
                            Create an Account
                        </Link>
                    </p>
                </div>
                <label htmlFor="email" className="mb-4 w-full">
                    <p className="text-cDark/15">Email Address</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <label htmlFor="password" className="mb-4 w-full">
                    <p className="text-cDark/15">Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="your password"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <div className="w-full flex justify-end">
                    <Link
                        href="#"
                        className="text-cBlue underline underline-offset-[3px] hover:font-semibold duration-300"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-12 mb-2 w-full">
                    <button className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
