import React from "react";

const Signin = () => {
  return (
    <div className="flex justify-center mt-6">
      <form className=" m-20 ">
        <div className=" text-center mt-2 font-bold font-serif text-3xl mb-7 text-white">
          Sign In
        </div>
        <div className="flex justify-center flex-col gap-5 border-2 rounded m-10 w-[350px] p-5 py-8 h-auto shadow-lg shadow-gray-500 ">
          <input
            className="text-normal p-2 rounded"
            type="text"
            placeholder="username"
            name="name"
          />
          {/* <input
            className="text-normal p-2 rounded"
            type="email"
            placeholder="Email"
          /> */}
          <input
            className="text-normal p-2 rounded"
            type="password"
            placeholder="password"
          />
          <button className="bg-blue-400 p-2 rounded-full hover:text-white">
            Sign In
          </button>
        </div>

        <a href="#" className="flex justify-center m-4 hover:text-white ">
          forget password?
        </a>
      </form>
    </div>
  );
};

export default Signin;
