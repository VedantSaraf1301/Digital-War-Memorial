import Modal from './Modal';
import './SoldierDetailModal.css';

/**
 * Detailed soldier information modal
 * Demonstrates: component composition, props handling
 */
function SoldierDetailModal({ soldier, isOpen, onClose }) {
    if (!soldier) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="soldier-detail">
                <div className="detail-header">
                    <img src={soldier.image} alt={soldier.name} className="detail-image" />
                    <div className="detail-header-info">
                        <span className="detail-rank-badge">{soldier.award}</span>
                        <h2>{soldier.rank} {soldier.name}</h2>
                        <p className="detail-regiment">{soldier.regiment}</p>
                        <p className="detail-war">{soldier.war}</p>
                    </div>
                </div>

                <div className="detail-body">
                    <section className="detail-section">
                        <h3>🎖️ About</h3>
                        <p>{soldier.desc}</p>
                    </section>

                    <section className="detail-section">
                        <h3>📜 Biography</h3>
                        <p>{soldier.biography || soldier.desc}</p>
                    </section>

                    <section className="detail-section">
                        <h3>⚔️ Battle Details</h3>
                        <p>{soldier.battleDetails || `Served with distinction in ${soldier.war}, demonstrating exceptional courage and leadership.`}</p>
                    </section>

                    <section className="detail-section">
                        <h3>💬 Famous Quote</h3>
                        <blockquote>"{soldier.quote || soldier.desc}"</blockquote>
                    </section>

                    <section className="detail-section">
                        <h3>🏅 Award Details</h3>
                        <div className="award-info">
                            <p><strong>Award:</strong> {soldier.award}</p>
                            <p><strong>For:</strong> Exceptional bravery and sacrifice in service to the nation</p>
                        </div>
                    </section>
                </div>

                <div className="detail-footer">
                    <p className="tribute">🙏 We salute your sacrifice and honor your memory</p>
                </div>
            </div>
        </Modal>
    );
}

export default SoldierDetailModal;
