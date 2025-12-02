import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  console.log('DarkModeToggle rendered, isDark:', isDark);

  return (
    <button
      type="button"
      onClick={(e) => {
        console.log('Button clicked!');
        e.preventDefault();
        e.stopPropagation();
        try {
          toggleDarkMode();
        } catch (error) {
          console.error('Error toggling dark mode:', error);
        }
      }}
      onMouseDown={(e) => {
        console.log('Button mouse down');
        e.stopPropagation();
      }}
      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 border border-neutral-200 dark:border-neutral-700 cursor-pointer relative z-50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

