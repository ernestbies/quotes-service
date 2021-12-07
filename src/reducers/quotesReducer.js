export const ADD_QUOTE = 'ADD_QUOTE';
export const NEXT_QUOTE = 'NEXT_QUOTE';
export const PREVIOUS_QUOTE = 'PREVIOUS_QUOTE';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR';

const initialState = {
    quotes: [],
    visitedQuotes: [],
    index: -1,
    isFetching: true,
    isConnected: true
};

export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                quotes: action.quotes,
                isFetching: false,
                index: 0,
                visitedQuotes: action.visitedQuotes
            }

        case FETCH_QUOTES_ERROR:
            return {
                ...state,
                isConnected: false,
                isFetching: true
            }

        case ADD_QUOTE:
            return {
                ...state,
                visitedQuotes: [...state.visitedQuotes, action.quote],
            };

        case NEXT_QUOTE:
            return {
                ...state,
                index: state.index + 1
            }

        case PREVIOUS_QUOTE:
            return {
                ...state,
                index: state.index - 1
            }

        default:
            return state;
    }
};
