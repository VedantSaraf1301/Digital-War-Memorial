import { useParams, useNavigate } from 'react-router-dom';
import { soldiers } from '../soldiers';
import './SoldierDetail.css';

function SoldierDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const soldier = soldiers.find(s => s.id === parseInt(id));

    if (!soldier) {
        return (
            <div className="soldier-detail-container">
                <h2>Soldier not found</h2>
                <button onClick={() => navigate('/')} className="back-btn">
                    ← Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="soldier-detail-container">
            <button onClick={() => navigate('/')} className="back-btn">
                ← Back to Home
            </button>

            <div className="detail-header">
                <div className="image-wrapper">
                    <img src={soldier.image} alt={soldier.name} className="detail-image" />
                </div>
                <div className="detail-title">
                    <span className="detail-rank">{soldier.rank}</span>
                    <h1 className="detail-name">{soldier.name}</h1>
                    <div className="detail-badges">
                        <span className="badge award-badge">{soldier.award}</span>
                    </div>
                </div>
            </div>

            <div className="detail-grid">
                <div className="detail-card bio-card">
                    <h2>Biographical Details</h2>
                    <div className="bio-info">
                        <div className="bio-item">
                            <span className="label">Born</span>
                            <span className="value">{soldier.birthDate}</span>
                        </div>
                        <div className="bio-item">
                            <span className="label">Hometown</span>
                            <span className="value">{soldier.hometown}</span>
                        </div>
                        <div className="bio-item">
                            <span className="label">War/Operation</span>
                            <span className="value">{soldier.war}</span>
                        </div>
                        <div className="bio-item">
                            <span className="label">Date of Sacrifice</span>
                            <span className="value">{soldier.deathDate}</span>
                        </div>
                    </div>
                </div>

                <div className="detail-card highlights-card">
                    <h2>Career Highlights</h2>
                    <ul className="highlights-list">
                        {soldier.careerHighlights && soldier.careerHighlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="detail-section citation-section">
                <h2>Citation & Story</h2>
                <p className="short-desc">"{soldier.desc}"</p>
                <div className="full-citation">
                    <p>{soldier.citation}</p>
                </div>
                {soldier.wikipediaUrl && (
                    <div className="wiki-link-container">
                        <a
                            href={soldier.wikipediaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link-btn"
                        >
                            📖 Read More on Wikipedia
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SoldierDetail;
