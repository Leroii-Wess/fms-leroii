// import React, { useState } from "react";

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log(email, password);
//   };

//   return (
//     <div className="min-h-screen flex flex-col gap-56">
//       <div className="h-24  shadow-md flex text-center w-auto">
//         <h2 className="text-blue-500 font-bold text-6xl py-6 ml-10">FMS</h2>
//       </div>
//       <div className=" flex items-center justify-center">
//         <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden flex">
//           {/* Left Image Section */}
//           {/* <div className="w-1/2 bg-cover bg-center">
//             <img
//               src={loginBg}
//               alt="Security Graphic"
//               className="h-full w-full object-cover"
//             />
//           </div> */}

//           {/* Right Login Form */}
//           <div className=" p-14 flex flex-col">
//             <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">
//               Log In
//             </h2>
//             <p className="mb-8 text-gray-600 text-xl ">
//               Enter your login details to gain access to your portal
//             </p>

//             {/* Login Form */}
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   className="text-2xl text-gray-700 mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-xl"
//                   placeholder="User ID or Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <div className="relative">
//                   <input
//                     type="password"
//                     id="password"
//                     className="text-2xl text-gray-700 mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-xl"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-7.5l-2.25 2.25c-.2.2-.51.2-.71 0L7 9.5a.5.5 0 0 1 .71-.71l1.54 1.54L12.29 8a.5.5 0 0 1 .71.71z" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 >
//                   Log in
//                 </button>
//               </div>

//               <div className="text-right">
//                 <a href="#" className="text-blue-600 hover:underline text-xl">
//                   Forgot password?
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// src/components/Login.tsx
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-20 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
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
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl"
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
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl"
              placeholder="Enter your password"
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-xl text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* <div className="flex items-center mb-4">
            <input
              id="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember Password
            </label>
          </div> */}

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
