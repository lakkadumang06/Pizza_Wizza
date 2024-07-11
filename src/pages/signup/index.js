import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Signup() {

  const router = useRouter();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("api/userSignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const res = await response.json();
    if (res.success) {
      localStorage.setItem("token", res.authToken);
      localStorage.setItem("userEmail", credentials.email);
      router.push("/");
    } else {
      alert(res.error);
    }

  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url('https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center"
    >
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter username"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-100"
              value={credentials.name}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              placeholder="Enter  email"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-100"
              value={credentials.email}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-100"
              value={credentials.password}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              name="geolocation"
              onChange={handleChange}
              type="text"
              placeholder="Enter your address"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-100"
              value={credentials.geolocation}
              required
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="border font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100 text-gray-900 dark:text-gray-50"
            >
              Signup
            </button>
            <Link href="/login" style={{ all: "unset" }}>
              <button className="border font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100 text-gray-900 dark:text-gray-50">
                Already a User?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
