import styled, {css} from 'styled-components';

export const StyledQuotesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    width: 100%;
    min-height: 300px;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        flex-direction: column;
    }
`;

export const StyledBtn = styled.div`
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.secondary};
    opacity: ${({isActive}) => isActive ? 1 : 0.4};
    cursor: ${({isActive}) => isActive ? 'pointer' : 'auto'};
    outline: 0;
    min-width: 50px;
    height: 50px;
    margin: 50px;
    border-radius: 50%;
    text-align: center;
    font-family: Patrick Hand SC, serif;
    font-size: 30px;
    user-select: none;
    transition: 1s all ease-in-out;
    
    ${({isActive}) => isActive && css`
        &:hover {
            transform: scale(1.1);
            color: orange;
        }
    `};
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        margin: 10px;
    }
`;
