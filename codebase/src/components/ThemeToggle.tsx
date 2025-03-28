import { useTheme } from '../lib/theme';
import { useHoverAnimation } from '../lib/animations';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useHoverAnimation(1.1);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 
                 shadow-sm backdrop-blur-sm transition-all duration-200 ease-in-out
                 hover:bg-gray-200/80 dark:hover:bg-gray-700/80
                 border border-gray-200/50 dark:border-gray-700/50
                 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
          />
        </svg>
      )}
    </button>
  );
} 