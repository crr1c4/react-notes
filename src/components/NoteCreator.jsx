import React from "react";
import { v4 as genId } from "uuid";
import ErrorMessage from "./ErrorMessage";

const NoteCreator = (props) => {
  const { setShowNoteCreator } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };

  // todo: localstorage
  // todo: add focus to inputs

  const createNote = async () => {
    try {
      const date = new Date();

      if (title === "" && description === "") throw "Empty fields.";
      if (title === "") throw "Empty Title.";
      if (description === "") throw "Empty Description.";

      const note = {
        id: genId(),
        title,
        description,
        done: false,
        day: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      };

      console.log(note);
    } catch (err) {
      setErrorMessage(err);
      setShowError(true);
    }
  };

  return (
      <div className="relative text-black dark:text-white min-h-full flex flex-col justify-center items-center select-none gap-5">
        {showError ? (
          <ErrorMessage
            errorMessage={errorMessage}
            setShowError={setShowError}
          />
        ) : null}
        <div className="flex justify-center items-center text-4xl lg:text-6xl">
          <span className="material-icons-round text-4xl lg:text-6xl">
            note_add
          </span>
          <span className="uppercase font-bold">new note</span>
        </div>

        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-2 w-11/12 lg:w-2/4 flex flex-row items-center">
          <span className="material-icons-round">title</span>
          <input
            type="text"
            placeholder="Enter title here..."
            className="outline-none bg-transparent w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-2 h-60 w-11/12 lg:w-2/4 flex flex-row items-center">
          <textarea
            placeholder="Enter description here..."
            className="resize-none w-full h-full outline-none border-0 bg-transparent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="w-11/12 lg:w-2/4 grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-3">
          <button
            className="bg-blue-600 dark:bg-indigo-800 text-white uppercase font-semibold py-2 w-full rounded-xl dark:hover:bg-indigo-700 hover:bg-blue-700 select-none"
            onClick={clearInputs}
          >
            clear
          </button>
          <button
            className="bg-blue-600 dark:bg-indigo-800 text-white uppercase font-semibold py-2 w-full rounded-xl dark:hover:bg-indigo-700 hover:bg-blue-700 select-none"
            onClick={createNote}
          >
            create
          </button>
          <button
            onClick={() => setShowNoteCreator(false)}
            className="bg-red-600 text-white hover:bg-red-700 uppercase font-semibold py-2 w-full rounded-xl select-none sm:hidden dark:hover:bg-red-500"
          >
            cancel
          </button>
        </div>

        <div
          className="underline cursor-pointer text-xs hidden sm:block"
          onClick={() => setShowNoteCreator(false)}
        >
          Return to start page
        </div>
      </div>
  );
};

export default NoteCreator;
