import React, {useEffect} from "react";
import {addQuote, fetchQuotes, nextQuote, previousQuote} from "../../actions/quotesActions";
import {StyledBtn, StyledQuotesContainer} from "./QuotesContainer.styles";
import Quote from "../Quote/Quote";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {useDispatch, useSelector} from "react-redux";

const QuotesContainer = () => {

    const {visitedQuotes, quotes, index, isFetching, isConnected} = useSelector(state => state.quotesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    const nextQuoteFromList = () => {
        if(index + 1 === visitedQuotes.length) {
            dispatch(addQuote(quotes[Math.floor(Math.random() * quotes.length)]));
        }
        dispatch(nextQuote());
    }

    const previousQuoteFromList = () => {
        if(index - 1 >= 0) {
            dispatch(previousQuote());
        }
    }

    return (
        <StyledQuotesContainer>
            {
                isFetching ? <LoadingSpinner isConnected={isConnected}/> :
                    <>
                        <StyledBtn isActive={index !== 0} onClick={previousQuoteFromList}>{'<'}</StyledBtn>
                        <Quote text={visitedQuotes[index]?.quote} author={visitedQuotes[index]?.author}/>
                        <StyledBtn isActive onClick={nextQuoteFromList}>{'>'}</StyledBtn>
                    </>
            }
        </StyledQuotesContainer>
    )
};

export default QuotesContainer;

