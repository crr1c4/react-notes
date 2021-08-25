import React from "react";

const ErrorMessage = (props) => {
  const { errorMessage, setShowError } = props;
  return (
    <div className="absolute top-0 w-full bg-red-600 text-white py-2 px-4 rounded-b-xl select-none flex justify-between sm:w-5/6 lg:w-3/6">
      <div className="flex items-center justify-center gap-1">
        <span className="material-icons-round">error</span>
        <span className="capitalize font-bold">Error:</span>{" "}
        <span>{errorMessage}</span>
      </div>
      <button
        onClick={() => setShowError(false)}
        className="cursor-pointer flex justify-center items-center rounded-full p-1 hover:bg-red-700 dark:hover:bg-red-500"
      >
        <span className="material-icons-round">close</span>
      </button>
    </div>
  );
};

export default ErrorMessage;
