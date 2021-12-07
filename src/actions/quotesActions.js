import {
    ADD_QUOTE,
    FETCH_QUOTES_ERROR,
    FETCH_QUOTES_SUCCESS,
    NEXT_QUOTE,
    PREVIOUS_QUOTE
} from "../reducers/quotesReducer";
import {API_URL} from "../utils/info";

export const addQuote = (quote) => ({type: ADD_QUOTE, quote});
export const nextQuote = () => ({type: NEXT_QUOTE});
export const previousQuote = () => ({type: PREVIOUS_QUOTE});

export const fetchQuotes = () => dispatch => {
    fetch(API_URL)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                dispatch({
                    type: FETCH_QUOTES_ERROR
                });
            }
        })
        .then(res => {
            dispatch({
                type: FETCH_QUOTES_SUCCESS,
                quotes: res,
                visitedQuotes: [res[Math.floor(Math.random() * res.length)]]
            });
        })
        .catch(() => {
            dispatch({
                type: FETCH_QUOTES_ERROR
            });
        });

};

