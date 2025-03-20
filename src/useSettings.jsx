import { createContext, useContext, useState, useEffect } from "react";

// Define presets
const presets = {
  light: {
    style: {
      icons: { size: 40, color: "#000000" },
      background: "#F3E5AB",
      text: { font: "Arial, sans-serif", size: { title: 48, main: 16 } },
    },
    location: "",
    clock: { format: "24-hour" },
    weather: { format: "celsius" },
    date: { format: "DD/MM/YYYY" },
  },
  dark: {
    style: {
      icons: { size: 40, color: "#FFFFFF" },
      background: "#1E1E1E",
      text: { font: "Roboto, sans-serif", size: { title: 48, main: 16 } },
    },
    location: "",
    clock: { format: "24-hour" },
    weather: { format: "celsius" },
    date: { format: "DD/MM/YYYY" },
  },
  cyberpunk: {
    style: {
      icons: { size: 40, color: "#00FFFF" },
      background: "#0D0221",
      text: { font: "Orbitron, sans-serif", size: { title: 48, main: 16 } },
    },
    location: "",
    clock: { format: "24-hour" },
    weather: { format: "celsius" },
    date: { format: "DD/MM/YYYY" },
  },
  retro: {
    style: {
      icons: { size: 40, color: "#FF6B6B" },
      background: "#FFD700",
      text: { font: "Courier New, monospace", size: { title: 48, main: 16 } },
    },
    location: "",
    clock: { format: "12-hour" },
    weather: { format: "fahrenheit" },
    date: { format: "MM/DD/YYYY" },
  },
  minimalist: {
    style: {
      icons: { size: 40, color: "#333333" },
      background: "#FFFFFF",
      text: { font: "Helvetica, sans-serif", size: { title: 48, main: 16 } },
    },
    location: "",
    clock: { format: "24-hour" },
    weather: { format: "celsius" },
    date: { format: "YYYY-MM-DD" },
  },
};

const SettingsContext = createContext({
  ...presets.light, // Default settings
  setSettings: () => {},
});

export function SettingsProvider({ children }) {
  const [settings, setSettingsState] = useState(() => {
    const saved = localStorage.getItem("appSettings");
    return saved ? JSON.parse(saved) : presets.light;
  });

  const setSettings = (updates) => {
    setSettingsState((prev) => {
      let newSettings;
      if (typeof updates === "string" && presets[updates]) {
        newSettings = { ...presets[updates] }; // Apply preset
      } else if (typeof updates === "object") {
        newSettings = { ...prev, ...updates }; // Merge custom settings
      } else {
        return prev;
      }

      localStorage.setItem("appSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  return (
    <SettingsContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
