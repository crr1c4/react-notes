import React from "react";

const NoteThumbnail = ({ note, changeFocus, setCurrentID }) => {
  const { title, description, day, time, id } = note;
  const styles = {
    container:
      "hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white bg-white w-full py-2 px-4 rounded-xl cursor-pointer select-none",
    dateContainer: "text-xs float-right flex justify-center items-center gap-1",
    dateIcon: "material-icons-round text-xs",
    dateText: "font-semibold",
    titleContainer: "text-xl font-bold",
    descriptionContainer: "text-sm",
  };

  const focusNote = () => {
    setCurrentID(id);
    changeFocus("note");
  };

  return (
    <div onClick={focusNote} className={styles.container}>
      <div className={styles.dateContainer}>
        <span className={styles.dateIcon}>schedule</span>
        <span className={styles.dateText}>
          {day === new Date().toLocaleDateString()
            ? time.endsWith(":")
              ? time.substr(0, 4)
              : time.substr(0, 5)
            : day}
        </span>
      </div>

      <div className={styles.titleContainer}>
        {title.substr(0, 15)}
        {title.length > 15 && !title.substr(0, 15).endsWith(" ") ? "..." : ""}
      </div>

      <div className={styles.descriptionContainer}>
        {description.indexOf(" ") === -1 ? `${description.substr(0, 20)}...` : description.substr(0, 100)}
        {description.length > 100 ? "..." : ""}
      </div>
    </div>
  );
};

export default NoteThumbnail;
