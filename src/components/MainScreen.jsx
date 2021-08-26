import React from "react";
import NoteCreator from "./NoteCreator";
import StartMenu from "./StartMenu";
import NoteFocused from "./NoteFocused";

const MainScreen = (props) => {
  const { showNoteCreator, setShowNoteCreator, theme, focus, changeFocus } =
    props;

  return (
    <div
      className={`max-h-screen sm:col-span-2 md:col-span-3 lg:col-span-2 col-span-full dark:bg-gray-900 ${
        showNoteCreator ? "" : "hidden"
      } sm:block lg:col-span-3`}
    >
      {focus === "start" ? (
        <StartMenu theme={theme} />
      ) : focus === "create" ? (
        <NoteCreator
          setShowNoteCreator={setShowNoteCreator}
          changeFocus={changeFocus}
        />
      ) : (
        <NoteFocused />
      )}
      {/* {showNoteCreator ? (
    <NoteCreator setShowNoteCreator={setShowNoteCreator} />
  ) : (
    <StartMenu theme={theme} />
  )} */}
    </div>
  );
};

export default MainScreen;
