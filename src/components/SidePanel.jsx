import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import NoteThumbnail from "./NoteThumbnail";

const SidePanel = (props) => {
  const { theme, changeTheme, focus, changeFocus, notes } = props;

  return (
    <div
      className={`sm:overflow-y-scroll col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-4 px-4 sm:px-2 gap-3 sm:shadow-2xl ${
        focus === "start" ? "hidden" : ""
      } sm:flex`}
    >
      <button
        className="bg-blue-600 dark:bg-indigo-800 text-white uppercase font-semibold py-2 w-full rounded-xl dark:hover:bg-indigo-700 hover:bg-blue-700 select-none"
        onClick={() => changeFocus("create")}
      >
        create note
      </button>

      <ThemeSwitch changeTheme={changeTheme} theme={theme} />

      <div className="dark:text-white text-sm w-full flex items-center justify-end gap-1 select-none">
        <span className="font-bold text-lg">{notes.length}</span>
        <span className="material-icons-round">text_snippet</span>
      </div>

      {notes.map((note) => (
        <NoteThumbnail key={note.id} note={note} changeFocus={changeFocus} />
      ))}
    </div>
  );
};

export default SidePanel;
