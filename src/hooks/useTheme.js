import { useState } from "react";

export const useTheme = (initialTheme) => {
  const [theme, setTheme] = useState(() => {
    try {
      if (!initialTheme || initialTheme !== "dark" || initialTheme !== "")
        return "dark";
      return initialTheme;
    } catch (err) {
      console.error(err);
    }
  });

  const changeTheme = () => {
    try {
      setTheme(theme === "dark" ? "" : "dark");
    } catch (err) {
      console.error(err);
    }
  };

  return [theme, changeTheme];
};
