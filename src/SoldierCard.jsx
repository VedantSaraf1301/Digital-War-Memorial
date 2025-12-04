import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SoldierCard({ soldier }) {
  const [salutes, setSalutes] = useState(0);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/soldier/${soldier.id}`);
  };

  const handleSalute = (e) => {
    e.stopPropagation();
    setSalutes(salutes + 1);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-image-container">
        <img src={soldier.image} alt={soldier.name} className="card-image" />
      </div>

      <div className="card-content">
        <span className="rank-badge">{soldier.award}</span>
        <h2>{soldier.rank} {soldier.name}</h2>
        <p className="regiment">{soldier.regiment}</p>
        <p className="war-tag">{soldier.war}</p>
        <p className="description">"{soldier.desc}"</p>

        <button className="salute-btn" onClick={handleSalute}>
          🫡 Salute <span className="count">({salutes})</span>
        </button>
      </div>
    </div>
  );
}

export default SoldierCard;