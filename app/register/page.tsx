"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import requests from "@/lib/requests";
import { instance } from "@/lib/axios";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function registerHandler() {
    if (
      !password.length ||
      !username.length ||
      !email.length ||
      !firstName.length ||
      !lastName.length ||
      !confirmPassword.length
    ) {
      toast.error("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading((prev) => true);
    instance
      .post(requests.register, {
        username,
        email,
        firstName,
        lastName,
        password,
        date_of_birth: date,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Registration Successful");
        router.push("/login");
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
            required
            value={username}
            onChange={(e) => setUsername((prev) => e.target.value)}
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
              value={firstName}
              onChange={(e) => setFirstName((prev) => e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName((prev) => e.target.value)}
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
            value={email}
            onChange={(e) => setEmail((prev) => e.target.value)}
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
            value={password}
            onChange={(e) => setPassword((prev) => e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword((prev) => e.target.value)}
            placeholder="Enter your password again"
            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
          />
        </label>
        <label htmlFor="dob" className="mb-4 w-full">
          <p className="text-cDark">Date of Birth</p>
          <input
            type="date"
            name="dob"
            id="dob"
            value={date ? date.toISOString().split("T")[0] : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
            className="w-full h-12 px-4 border border-cGrey rounded-lg focus:outline-cBlue"
          />
        </label>
        <div className="my-12 w-full">
          {loading ? (
            <Loader />
          ) : (
            <button
              onClick={registerHandler}
              className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300"
            >
              Sign up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
