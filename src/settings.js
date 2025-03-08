import { useState } from "react";

export function useClockSettings() {
    const [settings, setSettings] = useState({
        is24Hour: false,
        font: "Arial",
        bgColor: "#ffffff",
        textColor: "#000000",
    });

    return { settings, setSettings };
}
