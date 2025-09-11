"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const handleRegister = async () => {
    if (password1 !== password2) return alert("Passwords do not match");

    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password1 }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                className="h-7 font-bold w-full px-2 py-5 rounded-sm border border-gray-500"
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div>
              <p>Confirm Password</p>
              <input
                type="password"
                className="h-7 font-bold w-full px-2 py-5 rounded-sm border border-gray-500"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
          </div>

          <button
            className="py-3 text-white bg-blue-400 rounded-md mt-5 cursor-pointer"
            onClick={handleRegister}
          >
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
