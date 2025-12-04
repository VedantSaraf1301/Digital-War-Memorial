import { useState, useEffect } from 'react';

/**
 * Custom hook for debouncing values (e.g., search input)
 * Demonstrates: useState, useEffect cleanup, performance optimization
 */
export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up timeout to update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function: cancel timeout if value changes before delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
