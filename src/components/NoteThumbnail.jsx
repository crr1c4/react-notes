import React from "react";

const NoteThumbnail = (props) => {
  const { note, changeFocus } = props;
  const { title, description, day, time } = note;

  return (
    <div
      onClick={() => changeFocus("note")}
      className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white w-full py-2 px-4 rounded-xl cursor-pointer select-none"
    >
      {/* Date */}
      <div className="text-xs float-right flex justify-center items-center gap-1">
        <span className="material-icons-round text-xs">schedule</span>
        <span className="font-semibold">
          {day === new Date().toLocaleDateString()
            ? time.endsWith(":")
              ? time.substr(0, 4)
              : time.substr(0, 5)
            : day}
        </span>
      </div>
      {/* Title */}
      <div className="text-xl font-bold">
        {title.substr(0, 15)}
        {title.length > 15 && !title.substr(0, 15).endsWith(" ") ? "..." : ""}
      </div>
      {/* Description */}
      <div className="text-sm">
        {description.substr(0, 100)}
        {description.length > 100 ? "..." : ""}
      </div>
    </div>
  );
};

export default NoteThumbnail;
