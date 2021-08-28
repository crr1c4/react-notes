import React from "react";

function NoteFocused({
  currentID,
  storedNotes,
  changeFocus,
  setCurrentID,
  setNotes,
}) {
  const { title, description, day, time, id } = storedNotes.filter(
    (note) => note.id === currentID
  )[0];

  const goBack = () => {
    changeFocus("start");
    setCurrentID("");
  };

  const updateNote = () => {
    changeFocus("edit");
  };

  const deleteNote = () => {
    const notes = storedNotes.filter((note) => note.id !== id);
    goBack();
    setNotes(notes);
  };

  const styles = {
    container:
      "overflow-y-scroll bg-gray-100 dark:bg-gray-900 dark:text-white p-2 flex flex-col justify-between h-full gap-4 px-4 md:px-8",
    textContainer: "flex flex-col gap-4",
    textTitle: "text-5xl font-semibold",
    textDescription: "text-md",
    infoContainer:
      "text-xs dark:text-gray-400 gap-2 select-none dark:hover:bg-gray-800 rounded-xl p-2 grid grid-cols-2 grid-rows-2 self-center w-8/12 lg:w-4/12",
    icon: "material-icons-round",
    infoTitle: "gap-2 flex items-center justify-center col-span-2",
    infoOption: "gap-2 flex items-center justify-center",
    buttonContainer:
      "w-full grid grid-rows-3 gap-2 select-none sm:grid-rows-2 md:grid-rows-none md:grid-cols-2 md:w-5/6 md:self-center lg:w-4/6",
    blueButton:
      "flex items-center justify-center rounded-xl bg-blue-600 text-white font-semibold py-2 dark:hover:bg-indigo-700 dark:bg-indigo-800 hover:bg-blue-700 gap-1",
    redButton:
      "dark:hover:bg-red-500 hover:bg-red-700 bg-red-600 text-white font-semibold py-2 rounded-xl flex justify-center items-center",
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>{title}</div>
        <div className={styles.textDescription}>{description}</div>

        <div className={styles.infoContainer}>
          <div className={styles.infoTitle}>
            <span className={styles.icon}>info</span>
            <span className="uppercase font-bold">info:</span>
          </div>

          <div className={styles.infoOption}>
            <span className={styles.icon}>date_range</span>
            <span className="capitalize">date: {day}</span>
          </div>

          <div className={styles.infoOption}>
            <span className={styles.icon}>schedule</span>
            <span className="capitalize">
              time:{" "}
              {time.substr(0, 5).endsWith(":")
                ? time.substr(0, 4)
                : time.substr(0, 5)}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={goBack} className={`${styles.blueButton} sm:hidden`}>
          <span className={styles.icon}>arrow_back</span>
          <span className="uppercase">go back</span>
        </button>
        <button onClick={updateNote} className={styles.blueButton}>
          <span className={styles.icon}>edit</span>
          <span className="uppercase">edit</span>
        </button>
        <button onClick={deleteNote} className={styles.redButton}>
          <span className={styles.icon}>delete</span>
          <span className="uppercase">delete</span>
        </button>
      </div>
    </div>
  );
}

export default NoteFocused;
