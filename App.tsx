import React, { useState, useEffect } from 'react';
import { Settings } from './components/Settings';
import { TypingPractice } from './components/TypingPractice';
import { SettingsIcon } from './components/Icons';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Theme } from './types';

function App() {
  const [isPracticing, setIsPracticing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 24); // Stored in px

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-practice', `${fontSize / 16}rem`);
  }, [fontSize]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-300">
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Typing Practice Pro</h1>
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Open settings"
        >
          <SettingsIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </button>
      </header>

      <main className="w-full max-w-4xl flex-grow flex flex-col items-center justify-center mb-16 sm:mb-0">
        {isPracticing ? (
          <TypingPractice />
        ) : (
          <div className="text-center animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Welcome!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Improve your typing speed and accuracy with adaptive practice.</p>
            <button
              onClick={() => setIsPracticing(true)}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
            >
              Start Practice
            </button>
          </div>
        )}
      </main>

      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
    </div>
  );
}

export default App;