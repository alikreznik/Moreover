import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sun as SunIcon,
  Calendar as DateIcon,
  Clock as ClockIcon,
  Settings as SettingsIcon,
  Ellipsis as MoreIcon,
  Maximize as MaxIcon
} from "lucide-react";

import Date from "./Routes/Date";
import Weather from "./Routes/Weather";
import Clock from "./Routes/clock";
import Settings from "./Routes/Settings";
import { useSettings } from "./useSettings"
function App() {
  const { style } = useSettings()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  // const [settings, setSettings] = useState({
  //   style: {
  //     icons: {
  //       size: 40,
  //       color: "#000000",
  //     },
  //     background: "#F3E5AB",
  //     text: {
  //       font: "",
  //       size: {
  //         title: 48,
  //         main: 16
  //       }
  //     },
  //   },
  //   location:"",
  //   clock: {
  //     format: "24-hour"
  //   },
  //   weather: {
  //     format: "celsius"
  //   },
  //   date: {
  //     format: "DD/MM/YYYY"
  //   }
  // });

  useEffect(() => {
    let timeout;
    const resetTimer = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          setIsVisible(false);
          setIsOpen(true);
      }, 1000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{ fontFamily: style.text.font, backgroundColor: style.background }}
      className="min-h-screen"
    >
      <div
        className={`fixed top-0 right-0 h-full flex flex-col justify-between py-6 pr-3 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-10 pointer-events-none"
        }`}
      >
        {/* Top Icons (Sun, Calendar, Clock) */}
        <div
          className={`flex flex-col gap-5 transition-all duration-300 ${
            isOpen
              ? "translate-x-10 opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* Clock Icon */}
          <button
            onClick={() => navigate("/clock")}
            className="hover:opacity-30 transition-opacity"
          >
            <ClockIcon
              style={{
                width: style.icons.size,
                height: style.icons.size,
                color: style.icons.color,
              }}
            />
          </button>
          {/* Date Icon */}
          <button
            onClick={() => navigate("/date")}
            className="hover:opacity-30 transition-opacity"
          >
            <DateIcon
              style={{
                width: style.icons.size,
                height: style.icons.size,
                color: style.icons.color,
              }}
            />
          </button>
          {/* Weather Icon */}
          <button
            onClick={() => navigate("/weather")}
            className="hover:opacity-30 transition-opacity"
          >
            <SunIcon
              style={{
                width: style.icons.size,
                height: style.icons.size,
                color: style.icons.color,
              }}
            />
          </button>
        </div>

        {/* Bottom Icons (Settings and More) */}
        <div className="flex flex-col gap-5 items-end">
          <div
            className={`flex flex-col gap-5 transition-all duration-300 ${
              isOpen
                ? "translate-x-10 opacity-0 pointer-events-none"
                : "translate-x-0 opacity-100"
            }`}
          >
            {/* Settings Icon */}
            <button
              onClick={() => navigate("/settings")}
              className="hover:opacity-30 transition-opacity"
            >
              <SettingsIcon
                style={{
                  width: style.icons.size,
                  height: style.icons.size,
                  color: style.icons.color,
                }}
              />
            </button>
            {/* Maximize Icon */}
            <button
              onClick={() =>
                document.fullscreenElement
                  ? document.exitFullscreen()
                  : document.documentElement.requestFullscreen()
              }
              className="hover:opacity-30 transition-opacity"
            >
              <MaxIcon
                style={{
                  width: style.icons.size,
                  height: style.icons.size,
                  color: style.icons.color,
                }}
              />
            </button>
          </div>

          {/* More Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:opacity-30 transition-opacity"
          >
            <MoreIcon
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              style={{
                width: style.icons.size,
                height: style.icons.size,
                color: style.icons.color,
              }}
            />
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/date" element={<Date />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App
