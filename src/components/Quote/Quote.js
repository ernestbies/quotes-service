import {StyledQuote} from "./Quote.styles";
import React from "react";
import PropTypes from 'prop-types';

const Quote = ({text, author}) => (
    <StyledQuote>
        {text + '\n— ' + author}
    </StyledQuote>
);

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Quote;
