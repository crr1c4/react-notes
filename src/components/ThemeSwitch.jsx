import React from "react";

const ThemeSwitch = (props) => {
  const { changeTheme, theme } = props;

  return (
    <div className="dark:text-white select-none flex flex-row items-center gap-4">
      <span className="material-icons-round">dark_mode</span>

      <div
        className="h-6 w-12 cursor-pointer bg-blue-600 dark:bg-indigo-800 rounded-full"
        onClick={changeTheme}
      >
        <div
          className={`h-6 w-6 flex justify-center items-center transform ${
            theme === "dark" ? "" : "translate-x-full"
          }`}
        >
          <div className="w-8/12 h-4/6 bg-white rounded-full"></div>
        </div>
      </div>

      <span className="material-icons-round">light_mode</span>
    </div>
  );
};

export default ThemeSwitch;
