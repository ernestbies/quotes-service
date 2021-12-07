import styled, {css} from 'styled-components';

export const StyledInfoSection = styled.div`
    min-height: 450px;
    clip-path: polygon(36% 8%, 30% 0, 100% 0, 100% 100%, 0 100%, 0 0);
    background-color: ${({theme}) => theme.colors.secondary};
    display: flex;
    padding-bottom: 100px;
    
    ${({ theme }) => theme.mediaBreakpoints.lg} {
        flex-direction: column;
    }
`;

export const InfoImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 50px;
    
    ${({ theme }) => theme.mediaBreakpoints.lg} {
        margin-top: 100px;
    }
`;

export const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 5%, 100% 0, 100% 94%, 0% 100%);
`;

export const StyledImage = styled.img`
    width: 90%;
    height: 90%;
    pointer-events: none;
    user-select: none;
`;

export const ArrowImage = styled.img`
    width: 75px;
    height: 75px;
    transform: scaleY(-1) rotate(-20deg);
    pointer-events: none;
    user-select: none;
    
    ${({position}) => position === 'left' ? css`
        transform: scaleY(-1) rotate(-20deg);
    ` : css`
        transform: scaleX(-1) rotate(-40deg);
        margin-top: -25px;
        margin-left: -10px;
    `};
`;

export const InfoTextContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
`;


export const InfoTitleParagraph = styled.p`   
    font-family: Patrick Hand SC, serif;
    font-size: ${({theme}) => theme.font.size.titleLg};
    color: orange;
    letter-spacing: 2px;
    white-space: pre-wrap;
    text-align: center;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.font.size.titleSm};
    }
`;

export const InfoTextParagraph = styled.p`
    font-weight: ${({theme}) => theme.font.weight.bold};
    text-transform: uppercase;    
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size.md};
    width: 50%;
    color: ${({theme}) => theme.colors.primary};
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.7;
    
    ${({ theme }) => theme.mediaBreakpoints.sm} {
        font-size: ${({theme}) => theme.font.size.sm};
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`;
