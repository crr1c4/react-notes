import React from 'react'

function CreatedMessage({
  created,
  setCreated,
}) {
  const styles = {
    container:
      "sm:w-5/6 lg:w-3/6 absolute top-0 w-full bg-blue-600 text-white py-2 px-4 rounded-b-xl select-none flex justify-between dark:bg-indigo-800",
    textContainer: "flex items-center justify-center gap-1",
    icon: "material-icons-round",
    textDescription: "capitalize font-bold",
    closeButton:
      "hover:bg-blue-700 dark:hover:bg-indigo-700 cursor-pointer flex justify-center items-center rounded-full p-1",
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.icon}>done</span>
        <span className={styles.textDescription}>Note Created</span>{" "}
      </div>

      <button onClick={() => setCreated(false)} className={styles.closeButton}>
        <span className={styles.icon}>close</span>
      </button>
    </div>)
}

export default CreatedMessage
