import './FilterPanel.css';

/**
 * Filter panel component for awards and wars
 * Demonstrates: controlled components, event handling, dynamic options
 */
function FilterPanel({
    selectedAward,
    selectedWar,
    onAwardChange,
    onWarChange,
    onReset
}) {
    const awards = ['all', 'Param Vir Chakra', 'Ashoka Chakra', 'Maha Vir Chakra'];
    const wars = ['all', 'Kargil War (1999)', 'Indo-Pak War (1971)', 'Operation Black Tornado (2008)'];

    return (
        <div className="filter-panel">
            <div className="filter-group">
                <label htmlFor="award-filter">Filter by Award:</label>
                <select
                    id="award-filter"
                    value={selectedAward}
                    onChange={(e) => onAwardChange(e.target.value)}
                    className="filter-select"
                >
                    {awards.map(award => (
                        <option key={award} value={award}>
                            {award === 'all' ? 'All Awards' : award}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="war-filter">Filter by War/Operation:</label>
                <select
                    id="war-filter"
                    value={selectedWar}
                    onChange={(e) => onWarChange(e.target.value)}
                    className="filter-select"
                >
                    {wars.map(war => (
                        <option key={war} value={war}>
                            {war === 'all' ? 'All Wars/Operations' : war}
                        </option>
                    ))}
                </select>
            </div>

            <button onClick={onReset} className="reset-btn">
                🔄 Reset Filters
            </button>
        </div>
    );
}

export default FilterPanel;
