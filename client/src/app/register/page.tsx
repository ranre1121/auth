"use client";

import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  return (
    <div className="px-[100px] ">
      <div className="h-screen flex justify-center items-center">
        <div className="border-gray-400 rounded-lg px-5 py-5 border flex flex-col w-[350px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font bold">Register</h1>
          </div>
          <div className="flex flex-col gap-5 mt-7">
            <div>
              <p>Username</p>
              <input
                type="text"
                className="h-7 w-full px-2 py-5 rounded-sm border border-gray-500"
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                className="h-7 font-bold w-full px-2 py-5 rounded-sm border border-gray-500"
              />
            </div>
            <div>
              <p>Confirm Password</p>
              <input
                type="password"
                className="h-7 font-bold w-full px-2 py-5 rounded-sm border border-gray-500"
              />
            </div>
          </div>

          <button className="py-3 text-white bg-blue-400 rounded-md mt-5 cursor-pointer">
            Register
          </button>
          <p className="mt-5 self-center">
            Already have an account?{" "}
            <span
              className="text-blue-400 font-semibold cursor-pointer"
              onClick={() => {
                router.push("/login");
              }}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
