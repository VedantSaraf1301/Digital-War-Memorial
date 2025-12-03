// src/App.jsx
import { soldiers } from './soldiers';
import SoldierCard from './SoldierCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>🇮🇳 Indian Gallantry Archive</h1>
        <p>Honoring the bravehearts who gave their today for our tomorrow.</p>
      </header>

      <main className="card-grid">
        {soldiers.map((soldier) => (
          <SoldierCard key={soldier.id} soldier={soldier} />
        ))}
      </main>
      
      <footer>
        <p>Made with ❤️ and Respect | Jai Hind</p>
      </footer>
    </div>
  );
}

export default App;