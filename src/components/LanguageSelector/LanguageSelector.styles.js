import styled from 'styled-components';

export const StyledSelector = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LanguageType = styled.p`
    font-size: 20px;
    color: ${({active}) => active ? 'orange' : 'grey'};
    font-family: Patrick Hand SC, serif;
    font-weight: ${({active}) => active ? 700 : 400};
    margin: 0;
    margin-left: 10px;
    transition: all 1s ease-in-out;
    cursor: pointer;
    
    &:hover {
        color: orange;
    }
    
    ${({ theme }) => theme.mediaBreakpoints.md} {
        font-size: 18px;
    }
`;

export const LanguageDivider = styled.div`
    background: linear-gradient(grey, ${({theme}) => theme.colors.secondary}, grey);
    height: 1px;
    width: 25px;
    margin-left: 10px;
    margin-top: 7px;
    margin-bottom: 7px;
`;
