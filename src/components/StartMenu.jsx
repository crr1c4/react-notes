import React from "react";
import LightImage1 from "../assets/light_image1.svg";
import DarkImage1 from "../assets/dark_image1.svg";
import LightImage2 from "../assets/light_image2.svg";
import DarkImage2 from "../assets/dark_image2.svg";
import LightImage3 from "../assets/light_image3.svg";
import DarkImage3 from "../assets/dark_image3.svg";

const StartMenu = (props) => {
  const { theme } = props;
  return (
    <div className="dark:text-white h-full grid grid-rows-3 lg:grid-cols-2 gap-3 p-2 select-none max-h-full">
      <div className="flex flex-col justify-center items-center hover:bg-gray-100 gap-3 dark:hover:bg-gray-800 rounded-xl">
        <div className="font-serif uppercase text-2xl md:text-4xl font-semibold">
          how works?
        </div>
        <div className="text-sm md:text-md">
          Create, read, edit and delete notes...
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <img
          src={theme === "dark" ? DarkImage1 : LightImage1}
          alt="Instruction Image"
          className="w-2/4"
        />
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <img
          src={theme === "dark" ? DarkImage2 : LightImage2}
          alt="Instruction Image"
          className="w-2/4"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-3 hover:bg-gray-100  dark:hover:bg-gray-800 rounded-xl">
        <div className="font-serif uppercase text-2xl md:text-4xl font-semibold">
          local storage
        </div>
        <div className="text-sm md:text-md">
          This app use localStorage API for save your notes
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 hover:bg-gray-100  dark:hover:bg-gray-800 rounded-xl">
        <div className="font-serif uppercase text-2xl md:text-4xl font-semibold">
          about
        </div>
        <div className="text-sm md:text-md">
          Made by cr1c4 using{" "}
          <a className="underline inline" href="https://es.reactjs.org/">
            react.js
          </a>{" "}
          and{" "}
          <a className="underline inline" href="https://tailwindcss.com/">
            tailwindcss
          </a>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <img
          src={theme === "dark" ? DarkImage3 : LightImage3}
          alt="Instruction Image"
          className="w-2/4"
        />
      </div>
    </div>
  );
};

export default StartMenu;
