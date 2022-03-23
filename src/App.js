import "./App.css";
import Router from "./constants/Router";
// import useLocalStorage from "use-local-storage";

function App() {
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage(
  //   "theme",
  //   defaultDark ? "dark" : "light"
  // );

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  // data-theme={theme}

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
