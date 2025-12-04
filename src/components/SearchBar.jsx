import { useDebounce } from '../hooks/useDebounce';
import './SearchBar.css';

/**
 * Search bar component with debounced input
 * Demonstrates: controlled components, custom hooks, event handling
 */
function SearchBar({ searchQuery, onSearchChange }) {
    // Debounce is handled in parent component

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="🔍 Search by name, rank, or regiment..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;
