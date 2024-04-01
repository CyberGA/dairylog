"use client"

import Link from "next/link";
import { useState } from 'react';

export default function Page() {
    const [date, setDate] = useState<Date>();

    return (
        <div className="px-10 flex justify-center flex-col font-quicksand pb-8">
            <div className="max-w-md mx-auto flex flex-col items-center">
                <div className="w-full my-12">
                    <h1 className="text-3xl text-cDark leading-tight font-bungee">
                        Get Started
                    </h1>
                    <p className="text-cGrey/15 mt-1">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-cBlue underline underline-offset-[3px] hover:font-semibold duration-300"
                        >
                            Login
                        </Link>
                    </p>
                </div>
                <label htmlFor="username" className="mb-4 w-full">
                    <p className="text-cDark">Username</p>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Your username"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <div className="w-full flex flex-col sm:flex-row sm:gap-4 duration-300">
                    <label htmlFor="firstName" className="mb-4 w-full">
                        <p className="text-cDark">First Name</p>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Your name"
                            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                        />
                    </label>
                    <label htmlFor="lastName" className="mb-4 w-full">
                        <p className="text-cDark">Last Name</p>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Your surname"
                            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                        />
                    </label>
                </div>
                <label htmlFor="email" className="mb-4 w-full">
                    <p className="text-cDark">Email Address</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <label htmlFor="password" className="mb-4 w-full">
                    <p className="text-cDark">Password</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <label htmlFor="confirmPassword" className="mb-4 w-full">
                    <p className="text-cDark">Confirm Password</p>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Enter your password again"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <label htmlFor="dob" className="mb-4 w-full">
                    <p className="text-cDark">Confirm Password</p>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
                    />
                </label>
                <div className="my-12 w-full">
                    <button className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}