import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-[url("src/assets/Shape.png")]`}
      ></div>
      <div className="z-10 bg-white p-20 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-4xl text-gray-700 font-bold mb-2 text-center">
          Login to Account
        </h2>
        <p className="text-gray-600 text-center text-xl mb-6">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium text-2xl mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-2xl mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-2xl  rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl"
              placeholder="Enter your password"
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-xl text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-3/4 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
