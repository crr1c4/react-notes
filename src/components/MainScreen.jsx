import React from "react";

import NoteCreator from "./NoteCreator";
import StartMenu from "./StartMenu";
import NoteFocus from "./NoteFocus";

const MainScreen = ({ theme, focus, changeFocus, setNotes, storedNotes, currentID }) => {
  const styles = {
    container: `sm:block sm:col-span-2 md:col-span-3 lg:col-span-2 lg:col-span-3 dark:bg-gray-900 col-span-full max-h-screen ${
      focus === "create" || focus === "note" ? "" : "hidden"
    }`,
  };

  return (
    <div className={styles.container}>
      {focus === "start" ? (
        <StartMenu theme={theme} />
      ) : focus === "create" ? (
        <NoteCreator changeFocus={changeFocus} setNotes={setNotes} storedNotes={storedNotes} />
      ) : (
        <NoteFocus currentID={currentID} storedNotes={storedNotes} changeFocus={changeFocus}/>
      )}
    </div>
  );
};

export default MainScreen;
