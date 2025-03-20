// import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import { useSettings } from "../useSettings";

function Settings() {
  const { background, text, setSettings } = useSettings();

  return (
    <div
      style={{
        backgroundColor: background,
        // fontFamily: text.font,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Theme Selector</h1>

      <button onClick={() => setSettings("light")}>Light Mode</button>
      <button onClick={() => setSettings("dark")}>Dark Mode</button>
      <button onClick={() => setSettings("cyberpunk")}>Cyberpunk Mode</button>
      <button onClick={() => setSettings("retro")}>Retro Mode</button>
      <button onClick={() => setSettings("minimalist")}>Minimalist Mode</button>

      {/* Custom settings */}
      <button onClick={() => setSettings({ style: { background: "#ff00ff" } })}>
        Custom Background
      </button>
    </div>
  );

}

export default Settings;
