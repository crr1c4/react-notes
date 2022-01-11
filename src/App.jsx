import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Main from "./pages/Main";

const AppRoutes = () => useRoutes([{ path: "/", element: <Main /> }]);

// import MainScreen from './components/MainScreen'
// import SidePanel from './components/SidePanel'

// import { useTheme } from './hooks/useTheme'
// import { useFocus } from './hooks/useFocus'
// import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
  // const [theme, changeTheme] = useTheme()
  // const [focus, changeFocus] = useFocus()
  // const [storedNotes, setNotes, currentID, setCurrentID] = useLocalStorage('react-notes', [])

  // const styles = `sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 grid h-screen bg-white ${theme}`

  // const sidePanelProps = {
  //   theme,
  //   changeTheme,
  //   focus,
  //   changeFocus,
  //   storedNotes,
  //   setCurrentID
  // }

  // const mainScreenProps = {
  //   theme,
  //   focus,
  //   changeFocus,
  //   setNotes,
  //   storedNotes,
  //   currentID,
  //   setCurrentID
  // }

  return (
    // <main className={styles}>
    //   <SidePanel {...sidePanelProps} />
    //   <MainScreen {...mainScreenProps} />
    // </main>
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
