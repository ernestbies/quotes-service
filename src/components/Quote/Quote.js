import {StyledQuote} from "./Quote.styles";
import React from "react";

const Quote = ({text, author}) => (
    <StyledQuote>
        {text + '\n— ' + author}
    </StyledQuote>
);

export default Quote;
