import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting keyboard key presses
 * Demonstrates: useState, useEffect with event listeners, cleanup
 */
export function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    useEffect(() => {
        // Handler for key down
        const downHandler = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        };

        // Handler for key up
        const upHandler = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        };

        // Add event listeners
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        // Cleanup: remove event listeners
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetKey]);

    return keyPressed;
}
