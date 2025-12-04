import { Component } from 'react';
import './ErrorBoundary.css';

/**
 * Error Boundary component for graceful error handling
 * Demonstrates: Class component, componentDidCatch, getDerivedStateFromError
 * Note: Error boundaries must be class components (not functional)
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console or error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <h1>⚠️ Something went wrong</h1>
                        <p>We apologize for the inconvenience. An error occurred while displaying this content.</p>
                        <details>
                            <summary>Error details</summary>
                            <pre>{this.state.error?.toString()}</pre>
                        </details>
                        <button
                            onClick={() => window.location.reload()}
                            className="error-reload-btn"
                        >
                            🔄 Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
