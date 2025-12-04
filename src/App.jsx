import { useEffect, useReducer, useMemo, useCallback } from 'react';
import { soldiers } from './soldiers';
import SoldierCard from './SoldierCard';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import ErrorBoundary from './components/ErrorBoundary';
import { useTheme } from './context/ThemeContext';
import { useDebounce } from './hooks/useDebounce';
import { filterReducer, initialFilterState, FILTER_ACTIONS, applyFilters } from './reducers/filterReducer';
import './App.css';


function App() {
  const { theme } = useTheme();

  // useReducer for complex filter state management
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  // Debounce search query for performance
  const debouncedSearchQuery = useDebounce(filterState.searchQuery, 300);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // useMemo: Memoize filtered results to prevent unnecessary recalculations
  const filteredSoldiers = useMemo(() => {
    return applyFilters(soldiers, {
      ...filterState,
      searchQuery: debouncedSearchQuery
    });
  }, [debouncedSearchQuery, filterState.selectedAward, filterState.selectedWar, filterState.sortBy]);

  // useCallback: Memoize event handlers to prevent child re-renders
  const handleSearchChange = useCallback((query) => {
    dispatch({ type: FILTER_ACTIONS.SEARCH, payload: query });
  }, []);

  const handleAwardChange = useCallback((award) => {
    dispatch({ type: FILTER_ACTIONS.FILTER_BY_AWARD, payload: award });
  }, []);

  const handleWarChange = useCallback((war) => {
    dispatch({ type: FILTER_ACTIONS.FILTER_BY_WAR, payload: war });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: FILTER_ACTIONS.RESET });
  }, []);

  return (
    <div className="app-container">
      <ThemeToggle />
      <header className="hero-section">
        <h1>🇮🇳 Indian Gallantry Archive</h1>
        <p>Honoring the bravehearts who gave their today for our tomorrow.</p>
      </header>

      <div className="controls-section">
        <SearchBar
          searchQuery={filterState.searchQuery}
          onSearchChange={handleSearchChange}
        />
        <FilterPanel
          selectedAward={filterState.selectedAward}
          selectedWar={filterState.selectedWar}
          onAwardChange={handleAwardChange}
          onWarChange={handleWarChange}
          onReset={handleReset}
        />
      </div>

      <div className="results-info">
        <p>Showing {filteredSoldiers.length} of {soldiers.length} heroes</p>
      </div>

      <main className="card-grid">
        <ErrorBoundary>
          {filteredSoldiers.length > 0 ? (
            filteredSoldiers.map((soldier) => (
              <SoldierCard key={soldier.id} soldier={soldier} />
            ))
          ) : (
            <div className="no-results">
              <p>No soldiers found matching your criteria.</p>
              <button onClick={handleReset} className="reset-btn">Reset Filters</button>
            </div>
          )}
        </ErrorBoundary>
      </main>

      <footer>
        <p>Made with ❤️ and Respect | Jai Hind 🇮🇳</p>
      </footer>
    </div>
  );
}

export default App;