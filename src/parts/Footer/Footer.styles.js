import styled from 'styled-components';

export const StyledFooter = styled.div`
    min-height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: ${({theme}) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
`;

export const FooterText = styled.p`
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size.md};
    font-weight: ${({theme}) => theme.font.weight.light};
    color: white;
    text-align: center;
    margin: 0;
    white-space: pre-wrap;
    line-height: 1.5;
    width: 80%;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.font.size.sm};
    }
`;
