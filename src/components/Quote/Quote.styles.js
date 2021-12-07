import styled from 'styled-components';

export const StyledQuote = styled.p`
    position: relative;
    text-align: center;
    color: black;
    font-weight: 300;
    font-family: Gwendolyn, serif;
    font-size: ${({theme}) => theme.font.size.quoteLg};
    padding: 30px;
    background: linear-gradient(to right, orange 3px, transparent 3px) 0 100%,
                linear-gradient(to left, orange 3px, transparent 3px) 100% 0,
                linear-gradient(to bottom, orange 3px, transparent 3px) 100% 0,
                linear-gradient(to top, orange 3px, transparent 3px) 0 100%;
    background-repeat: no-repeat;
    background-size: 14px 14px;
    position: relative;
    width: 50%;
    max-width: 500px;
    white-space: pre-wrap;

    &:before {
        position: absolute;
        font-family: Cambria, serif;
        font-size: 50px;
        content: '“';
        color: orange;
        top: -10px;
        left: 0;
    }
    
    &:after {
        position: absolute;
        font-family: Cambria, serif;
        font-size: 50px;
        content: '”';
        color: orange;
        bottom: -30px;
        right: 0;
    }    
    
        ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.font.size.quoteSm};
    }
`;
