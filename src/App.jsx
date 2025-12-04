import { useState, useEffect } from 'react';
import { soldiers } from './soldiers';
import SoldierCard from './SoldierCard';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme } = useTheme();

  // Simple state for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAward, setSelectedAward] = useState('all');
  const [selectedWar, setSelectedWar] = useState('all');

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Simple filtering logic
  let filteredSoldiers = soldiers;

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredSoldiers = filteredSoldiers.filter(soldier =>
      soldier.name.toLowerCase().includes(query) ||
      soldier.rank.toLowerCase().includes(query) ||
      soldier.regiment.toLowerCase().includes(query)
    );
  }

  // Filter by award
  if (selectedAward !== 'all') {
    filteredSoldiers = filteredSoldiers.filter(soldier =>
      soldier.award === selectedAward
    );
  }

  // Filter by war
  if (selectedWar !== 'all') {
    filteredSoldiers = filteredSoldiers.filter(soldier =>
      soldier.war === selectedWar
    );
  }

  const handleReset = () => {
    setSearchQuery('');
    setSelectedAward('all');
    setSelectedWar('all');
  };

  return (
    <div className="app-container">
      <ThemeToggle />
      <header className="hero-section">
        <h1>BHARAT KE VEER </h1>
        <p>Honoring the bravehearts who gave their today for our tomorrow.</p>
      </header>

      <div className="controls-section">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <FilterPanel
          selectedAward={selectedAward}
          selectedWar={selectedWar}
          onAwardChange={setSelectedAward}
          onWarChange={setSelectedWar}
          onReset={handleReset}
        />
      </div>

      <div className="results-info">
        <p>Showing {filteredSoldiers.length} of {soldiers.length} heroes</p>
      </div>

      <main className="card-grid">
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
      </main>

      <footer>
        <p>Made with ❤️ and Respect | Jai Hind 🇮🇳</p>
        <a
          href="https://www.pmindia.gov.in/en/national-defence-fund/"
          target="_blank"
          rel="noopener noreferrer"
          className="ndf-btn"
        >
          Support National Defence Fund
        </a>
      </footer>
    </div>
  );
}

export default App;