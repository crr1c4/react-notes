import React from "react";

import MainScreen from "./components/MainScreen";
import SidePanel from "./components/SidePanel";
import notesTest from "./examples/test";

import { useTheme } from "./hooks/useTheme";
import { useFocus } from "./hooks/useFocus";

const App = () => {
  const [theme, changeTheme] = useTheme();
  const [focus, changeFocus] = useFocus();

  const styles = `sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 grid h-screen bg-white ${theme}`;
  
  const sidePanelProps = {
    theme,
    changeTheme,
    focus,
    changeFocus,
    notes: notesTest,
  };

  const mainScreenProps = {
    theme,
    focus,
    changeFocus,
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
// TODO: Format noteThumbnail.
// TODO: Add localstorage hook.