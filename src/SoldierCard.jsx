
import { useState } from 'react';

function SoldierCard({ soldier }) {
  
  const [salutes, setSalutes] = useState(0);

  return (
    <div className="card">
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
  );
}

export default SoldierCard;