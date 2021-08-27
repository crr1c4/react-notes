import React from "react";

import MainScreen from "./components/MainScreen";
import SidePanel from "./components/SidePanel";
// import notesTest from "./examples/test";

import { useTheme } from "./hooks/useTheme";
import { useFocus } from "./hooks/useFocus";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [theme, changeTheme] = useTheme();
  const [focus, changeFocus] = useFocus();
  const [storedNotes, setNotes, currentID, setCurrentID] = useLocalStorage("react-notes", []);

  const styles = `sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 grid h-screen bg-white ${theme}`;

  const sidePanelProps = {
    theme,
    changeTheme,
    focus,
    changeFocus,
    storedNotes,
    setCurrentID
  };

  const mainScreenProps = {
    theme,
    focus,
    changeFocus,
    setNotes,
    storedNotes,
    currentID
  };

  return (
    <main className={styles}>
      <SidePanel {...sidePanelProps} />
      <MainScreen {...mainScreenProps} />
    </main>
  );
};

export default App;
// TODO: Complete focus note component.
// TODO: Add localstorage hook.