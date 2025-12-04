/**
 * Filter reducer for complex state management
 * Demonstrates: useReducer pattern, action types, immutable state updates
 */

// Action types
export const FILTER_ACTIONS = {
    SEARCH: 'SEARCH',
    FILTER_BY_AWARD: 'FILTER_BY_AWARD',
    FILTER_BY_WAR: 'FILTER_BY_WAR',
    SORT: 'SORT',
    RESET: 'RESET'
};

// Initial state
export const initialFilterState = {
    searchQuery: '',
    selectedAward: 'all',
    selectedWar: 'all',
    sortBy: 'name'
};

// Reducer function
export function filterReducer(state, action) {
    switch (action.type) {
        case FILTER_ACTIONS.SEARCH:
            return {
                ...state,
                searchQuery: action.payload
            };

        case FILTER_ACTIONS.FILTER_BY_AWARD:
            return {
                ...state,
                selectedAward: action.payload
            };

        case FILTER_ACTIONS.FILTER_BY_WAR:
            return {
                ...state,
                selectedWar: action.payload
            };

        case FILTER_ACTIONS.SORT:
            return {
                ...state,
                sortBy: action.payload
            };

        case FILTER_ACTIONS.RESET:
            return initialFilterState;

        default:
            return state;
    }
}

// Filter logic function
export function applyFilters(soldiers, filterState) {
    let filtered = [...soldiers];

    // Apply search filter
    if (filterState.searchQuery) {
        const query = filterState.searchQuery.toLowerCase();
        filtered = filtered.filter(soldier =>
            soldier.name.toLowerCase().includes(query) ||
            soldier.rank.toLowerCase().includes(query) ||
            soldier.regiment.toLowerCase().includes(query)
        );
    }

    // Apply award filter
    if (filterState.selectedAward !== 'all') {
        filtered = filtered.filter(soldier =>
            soldier.award === filterState.selectedAward
        );
    }

    // Apply war filter
    if (filterState.selectedWar !== 'all') {
        filtered = filtered.filter(soldier =>
            soldier.war === filterState.selectedWar
        );
    }

    // Apply sorting
    filtered.sort((a, b) => {
        if (filterState.sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return filtered;
}
