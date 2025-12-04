import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Theme Context for global dark/light mode state
 * Demonstrates: createContext, useContext, Context Provider pattern
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Use custom hook for persistent theme preference
    const [theme, setTheme] = useLocalStorage('war-memorial-theme', 'light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook to use theme context
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
