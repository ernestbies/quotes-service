import styled from 'styled-components';

export const StyledQuoteSection = styled.div`
    min-height: 500px;
    background-color: transparent;
    width: 100%;    
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const PageTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
`;

export const PageTitle = styled.p`
    font-family: Patrick Hand SC, serif;
    font-size: ${({theme}) => theme.font.size.nameLg};
    color: orange;
    text-align: center;
    z-index: 2;
    white-space: pre-wrap;
    margin: 0;
    margin-bottom: 10px;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.font.size.nameSm};
    }
`;

export const StyledLine = styled.div`
    width: 40px;
    height: 1px;    
    background-color: orange;
`;

export const LineDivider = styled.div`
    display: flex;   
    align-items: center;
    justify-content: center; 
    height: 10px;
`;

export const LineImg = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    pointer-events: none;
    user-select: none;
`;


