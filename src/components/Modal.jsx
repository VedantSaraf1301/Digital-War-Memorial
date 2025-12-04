import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKeyPress } from '../hooks/useKeyPress';
import './Modal.css';

/**
 * Reusable Modal component using React Portals
 * Demonstrates: createPortal, useEffect, event handling, keyboard navigation
 */
function Modal({ isOpen, onClose, children }) {
    const escapePressed = useKeyPress('Escape');

    // Close modal when Escape is pressed
    useEffect(() => {
        if (escapePressed && isOpen) {
            onClose();
        }
    }, [escapePressed, isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Render modal in portal (outside main DOM hierarchy)
    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;
