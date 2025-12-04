import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

/**
 * Theme toggle component
 * Demonstrates: useContext consumption, event handling
 */
function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeToggle;
