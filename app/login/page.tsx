"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import requests from "@/lib/requests";
import { instance } from "@/lib/axios";
import Loader from "@/components/loader";
import { useGlobalContext } from "@/contexts/global-context";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useGlobalContext();

  function loginHandler() {
    if (!email.length || !password.length) {
      toast.error("All fields are required");
      return;
    }

    setLoading((prev) => true);
    instance
      .post(requests.login, {
        email,
        password,
      })
      .then((res) => {
        toast.success("Login Successful");
        const data = res.data;
        if (data.token_type) {
          delete data.token_type;
        }
        setUser(data);
        sessionStorage.setItem("authUser", JSON.stringify(data));
        router.push("/dashboard/entries");
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
            value={email}
            onChange={(e) => setEmail((prev) => e.target.value)}
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
            value={password}
            onChange={(e) => setPassword((prev) => e.target.value)}
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
          {loading ? (
            <Loader />
          ) : (
            <button
              onClick={loginHandler}
              className="w-full h-12 bg-cBlue text-white rounded-lg hover:font-bold duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
