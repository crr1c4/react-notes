import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import NoteThumbnail from "./NoteThumbnail";

const SidePanel = ({ theme, changeTheme, focus, changeFocus, notes }) => {
  const styles = {
    container: `col-span-4 flex flex-col items-center p-4 gap-3 sm:flex sm:px-2 sm:shadow-2xl sm:overflow-y-scroll sm:col-span-2 md:col-span-2 lg:col-span-1 dark:bg-gray-900 bg-gray-100 ${
      focus === "start" ? "" : "hidden"
    }`,
    button:
      "bg-blue-600 text-white uppercase font-semibold py-2 w-full rounded-xl select-none dark:hover:bg-indigo-700 dark:bg-indigo-800 hover:bg-blue-700",
    noteLengthContainer:
      "dark:text-white text-sm w-full flex items-center justify-end gap-1 select-none",
    noteLength: "font-bold text-lg",
    icon: "material-icons-round",
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => changeFocus("create")}>
        create note
      </button>

      <ThemeSwitch changeTheme={changeTheme} theme={theme} />

      <div className={styles.noteLengthContainer}>
        <span className={styles.noteLength}>{notes.length}</span>
        <span className={styles.icon}>text_snippet</span>
      </div>

      {notes.map((note) => (
        <NoteThumbnail key={note.id} note={note} changeFocus={changeFocus} />
      ))}
    </div>
  );
};

export default SidePanel;
