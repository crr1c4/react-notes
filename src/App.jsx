import React from "react";
import MainScreen from "./components/MainScreen";
import SidePanel from "./components/SidePanel";
import notesTest from "./components/test/test";

const App = () => {
  const [theme, setTheme] = React.useState("dark");
  const [notes, setNotes] = React.useState(notesTest);
  const [showNoteCreator, setShowNoteCreator] = React.useState(false);

  return (
    <div className={theme}>
      <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 h-screen bg-white dark:bg-gray-900">
        <SidePanel
          theme={theme}
          setTheme={setTheme}
          showNoteCreator={showNoteCreator}
          setShowNoteCreator={setShowNoteCreator}
          notes={notes}
        />
        <MainScreen
          showNoteCreator={showNoteCreator}
          setShowNoteCreator={setShowNoteCreator}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default App;
