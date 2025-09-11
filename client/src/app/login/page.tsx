"use client";

import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await res.json();
      if (!data.token) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[100px] ">
      <div className="h-screen flex justify-center items-center">
        <div className="border-gray-400 rounded-lg px-5 py-5 border flex flex-col w-[350px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font bold">Log in</h1>
          </div>
          <div className="flex flex-col gap-5 mt-7">
            <div>
              <p>Username</p>
              <input
                type="text"
                className="h-7 w-full px-2 py-5 rounded-sm border border-gray-500"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                className="h-7 font-bold w-full px-2 py-5 rounded-sm border border-gray-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p className="mt-2 text-blue-500 cursor-pointer">Forgot password?</p>
          <button
            className="py-3 text-white bg-blue-400 rounded-md mt-5 cursor-pointer"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p className="mt-5 self-center">
            Don't have an account?{" "}
            <span
              className="text-blue-400 font-semibold cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign up now!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
