import React from "react";

function NoteFocused({ currentID, storedNotes, changeFocus }) {
  const { title, description, day, time, id } = storedNotes.filter(
    (note) => note.id === currentID
  )[0];

  // TODO: Complete design of page
  return (
    <div className="dark:text-white p-2 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <div className="text-6xl font-semibold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
      <div>
        <button onClick={() => changeFocus("start")}>go back</button>
      </div>
    </div>
  );
}

export default NoteFocused;
