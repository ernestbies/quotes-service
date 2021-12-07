import {
    ArrowImage, IconsContainer,
    ImageWrapper,
    InfoImageContainer,
    InfoTextContainer, InfoTextParagraph, InfoTitleParagraph,
    StyledImage,
    StyledInfoSection
} from "./InfoSection.styles";
import React from "react";
import penImage from '../../images/pen.svg';
import arrowImage from '../../images/curved-arrow.svg';
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import {useTranslation} from "react-i18next";

const InfoSection = () => {

    const {t} = useTranslation('common');

    return (
        <StyledInfoSection>
            <InfoImageContainer>
                <ArrowImage src={arrowImage} position={'left'}/>
                <ImageWrapper>
                    <StyledImage src={penImage}/>
                </ImageWrapper>
                <ArrowImage src={arrowImage} position={'right'}/>
            </InfoImageContainer>
            <InfoTextContainer>
                <InfoTitleParagraph>{t('quotes_service_title')}</InfoTitleParagraph>
                <InfoTextParagraph>{t('quotes_service_text')}</InfoTextParagraph>
                <IconsContainer>
                    <SocialMediaIcon iconType={'portfolio'}/>
                    <SocialMediaIcon iconType={'github'}/>
                    <SocialMediaIcon iconType={'bitbucket'}/>
                </IconsContainer>
            </InfoTextContainer>
        </StyledInfoSection>
    )
};

export default InfoSection;
