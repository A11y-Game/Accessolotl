export const useThemeChanger = () => {
  let initialized = false;

  let themeInitialized = () => {
    return initialized;
  };

  let initialize = () => {
    if (
      getTheme() === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    initialized = true;
  };

  let toggleTheme = () => {
    if (getTheme()) {
      if (getTheme() === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  let getTheme = () => {
    return localStorage.getItem("color-theme");
  };

  return {
    initialize,
    toggleTheme,
    themeInitialized,
    getTheme,
  };
};
