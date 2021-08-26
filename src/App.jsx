import React from "react";

import MainScreen from "./components/MainScreen";
import SidePanel from "./components/SidePanel";
import notesTest from "./examples/test";

import { useTheme } from "./hooks/useTheme";
import { useFocus } from "./hooks/useFocus";

const App = () => {
  const [theme, changeTheme] = useTheme();
  const [focus, changeFocus] = useFocus();

  const styles = `${theme} grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 h-screen bg-white`;

  const mainScreenProps = {
    theme,
    focus,
    changeFocus,
  };

  const sidePanelProps = {
    theme,
    changeTheme,
    focus,
    changeFocus,
    notes: notesTest,
  };

  return (
    <main className={styles}>
      <SidePanel {...sidePanelProps} />
      <MainScreen {...mainScreenProps} />
    </main>
  );
};

export default App;
