import React from "react";

import MainScreen from "./components/MainScreen";
import SidePanel from "./components/SidePanel";
import notesTest from "./examples/test";

import { useTheme } from "./hooks/useTheme";
import { useFocus } from "./hooks/useFocus";

const App = () => {
  const [theme, changeTheme] = useTheme();
  const [focus, changeFocus] = useFocus();

  return (
    <div className={theme}>
      <div className="grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 h-screen bg-white dark:bg-gray-900">
        <SidePanel
          theme={theme}
          changeTheme={changeTheme}
          notes={notesTest}

          // custom 
          focus={focus}
          changeFocus={changeFocus}
        />
        <MainScreen
          theme={theme}

          // custom
          focus={focus}
          changeFocus={changeFocus}
        />
      </div>
    </div>
  );
};

export default App;
