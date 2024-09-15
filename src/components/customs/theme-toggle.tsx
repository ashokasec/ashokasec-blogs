"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ViewTransition {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
}

declare global {
    interface Document {
        startViewTransition(setupPromise: () => Promise<void> | void): ViewTransition;
    }
}

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  const handleToggleTheme = () => {
    if (!document.startViewTransition) {
        // Fallback for browsers that do not support View Transitions
        setTheme(currentTheme === "dark" ? "light" : "dark");
    } else {
        // Use View Transitions API for smoother transitions
        document.startViewTransition(() => {
            setTheme(currentTheme === "dark" ? "light" : "dark");
        });
    }
};

  return mount ? (
      <button
        onClick={handleToggleTheme}
        type="button"
        className="flex size-8 p-1 items-center justify-center rounded-md border  text-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:border-[#1d1d1d] dark:text-white"
      >
        <svg
          className="dark:hidden"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          className="hidden dark:block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
  ) : null;
};

export default ThemeSwitcher;