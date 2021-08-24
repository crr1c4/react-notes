import React from "react";
import NoteCreator from "./NoteCreator";
import StartMenu from "./StartMenu";

const MainScreen = (props) => {
  const { showNoteCreator, setShowNoteCreator, theme } = props;

  return (
    <div
      className={`max-h-screen sm:col-span-2 md:col-span-3 lg:col-span-2 col-span-full ${
        !showNoteCreator ? "hidden" : ""
      } sm:block lg:col-span-3`}
    >
      {showNoteCreator ? (
        <NoteCreator setShowNoteCreator={setShowNoteCreator} />
      ) : (
        <StartMenu theme={theme} />
      )}
    </div>
  );
};

export default MainScreen;
