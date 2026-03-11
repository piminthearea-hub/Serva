import { useEffect, useState } from "react";

const THEME_KEY = "chadwit-theme";
const TEXT_SIZE_KEY = "chadwit-text-size";

export type Theme = "light" | "dark";
export type TextSize = "normal" | "large" | "x-large";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const stored = document.documentElement.getAttribute("data-theme");
  return stored === "dark" ? "dark" : "light";
}

function getInitialTextSize(): TextSize {
  if (typeof document === "undefined") return "normal";
  const stored = document.documentElement.getAttribute("data-text-size");
  if (stored === "large" || stored === "x-large") return stored;
  return "normal";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
}

function applyTextSize(size: TextSize) {
  document.documentElement.setAttribute("data-text-size", size);
  try {
    localStorage.setItem(TEXT_SIZE_KEY, size);
  } catch {
    /* ignore */
  }
}

export function AccessibilityBar() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [textSize, setTextSize] = useState<TextSize>(getInitialTextSize);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    applyTextSize(textSize);
  }, [textSize]);

  return (
    <div className="accessibility-bar" role="region" aria-label="Appearance and text size">
      <div className="accessibility-bar-group">
        <span className="accessibility-bar-label">Theme</span>
        <div className="accessibility-bar-buttons" role="group" aria-label="Color theme">
          <button
            type="button"
            className={`accessibility-btn ${theme === "light" ? "accessibility-btn-active" : ""}`}
            onClick={() => setTheme("light")}
            aria-pressed={theme === "light"}
            aria-label="Light mode"
          >
            Light
          </button>
          <button
            type="button"
            className={`accessibility-btn ${theme === "dark" ? "accessibility-btn-active" : ""}`}
            onClick={() => setTheme("dark")}
            aria-pressed={theme === "dark"}
            aria-label="Dark mode"
          >
            Dark
          </button>
        </div>
      </div>
      <div className="accessibility-bar-group">
        <span className="accessibility-bar-label">Text size</span>
        <div className="accessibility-bar-buttons" role="group" aria-label="Text size for readability">
          <button
            type="button"
            className={`accessibility-btn ${textSize === "normal" ? "accessibility-btn-active" : ""}`}
            onClick={() => setTextSize("normal")}
            aria-pressed={textSize === "normal"}
            aria-label="Normal text size"
          >
            A
          </button>
          <button
            type="button"
            className={`accessibility-btn accessibility-btn-large ${textSize === "large" ? "accessibility-btn-active" : ""}`}
            onClick={() => setTextSize("large")}
            aria-pressed={textSize === "large"}
            aria-label="Large text size"
          >
            A
          </button>
          <button
            type="button"
            className={`accessibility-btn accessibility-btn-x-large ${textSize === "x-large" ? "accessibility-btn-active" : ""}`}
            onClick={() => setTextSize("x-large")}
            aria-pressed={textSize === "x-large"}
            aria-label="Largest text size"
          >
            A
          </button>
        </div>
      </div>
    </div>
  );
}
