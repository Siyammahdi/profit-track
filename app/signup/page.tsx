"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <div className="">
        <div className="fixed mx-44"></div>
        <div className="flex items-center h-screen">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-3">Sign up</h1>
                <p className="text-gray-500 mb-8 text-sm">
                  Enter your login details below
                </p>
              </div>

              <form className="mt-10">
                <label
                  htmlFor="email"
                  className="block text-gray-500 text-sm font-semibold"
                >
                  Name
                </label>
                <Input
                  type="name"
                  id="name"
                  placeholder="Siyam Mahdi"
                  className="w-full my-2 placeholder:text-sm"
                />

                <label
                  htmlFor="email"
                  className="block text-gray-500 text-sm font-semibold"
                >
                  Work Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="siyam@example.com"
                  className="w-full py-2 placeholder:text-sm"
                />

                <label
                  htmlFor="pass"
                  className="block text-gray-500 text-sm font-semibold"
                >
                  Password
                </label>
                <Input
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <FaEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="w-full py-2 placeholder:text-sm"
                />
                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <p className="text-sm text-primary hover:underline font-semibold">
                    Forgot password?
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary font-semibold text-white py-2 px-4 hover:bg-blue-800"
                >
                  Log in
                </Button>
              </form>

              <div className="my-5">
                <p className="mb-2 text-sm text-gray-500">Or continue with</p>
                <div className="flex gap-4">
                  <Button variant="bordered" fullWidth className="">
                    <FaGoogle />
                    Google
                  </Button>

                  <Button variant="bordered" fullWidth className="">
                    <FaFacebook />
                    Facebook
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-500 text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-primary text-sm hover:underline font-bold"
                >
                  Login
                </a>
              </p>
            </div>
          </div>

          <div className="w-2/5">
            <Image
              src="/phone.png"
              alt="img"
              width={1000}
              height={200}
              className="rounded-xl h-[80vh] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
