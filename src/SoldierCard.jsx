
import { useState, memo } from 'react';
import SoldierDetailModal from './components/SoldierDetailModal';

/**
 * SoldierCard component wrapped with React.memo for performance
 * Demonstrates: React.memo, useState, event handling
 */
function SoldierCard({ soldier }) {

  const [salutes, setSalutes] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e) => {
    // Don't open modal if clicking the salute button
    if (e.target.closest('.salute-btn')) return;
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <div className="card-image-container">
          <img src={soldier.image} alt={soldier.name} className="card-image" />
        </div>

        <div className="card-content">
          <span className="rank-badge">{soldier.award}</span>
          <h2>{soldier.rank} {soldier.name}</h2>
          <p className="regiment">{soldier.regiment}</p>
          <p className="war-tag">{soldier.war}</p>
          <p className="description">"{soldier.desc}"</p>

          <button className="salute-btn" onClick={() => setSalutes(salutes + 1)}>
            🫡 Salute <span className="count">({salutes})</span>
          </button>
        </div>
      </div>

      <SoldierDetailModal
        soldier={soldier}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

// Wrap with React.memo to prevent unnecessary re-renders
export default memo(SoldierCard);