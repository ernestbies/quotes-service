import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px;
`;

export const LoaderText = styled.p`
    font-family: ${({theme}) => theme.font.family};
    color: ${({isError}) => isError ? 'red' : 'black'};
    font-size: ${({theme}) => theme.font.size.lg};
    text-align: center;
`;
