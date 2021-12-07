import styled from 'styled-components';

export const StyledMediaIcon = styled.a`
    width: 40px;
    height: 40px;
    background-color: white;
    margin: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 1s ease;
    border: 1px solid black;
    
    &:hover {
        opacity: 0.6;
    }
`;

export const StyledImg = styled.img`
    width: 25px;
    height: 25px;
`;
