import React from "react";
import {
    LineDivider,
    LineImg,
    PageTitle,
    PageTitleContainer,
    StyledLine,
    StyledQuoteSection
} from "./QuotesSection.styles";
import {useTranslation} from "react-i18next";
import QuotesContainer from "../QuotesContainer/QuotesContainer";
import quoteImg from '../../images/quote.svg';

const QuotesSection = () => {

    const {t} = useTranslation('common');

    return (
        <StyledQuoteSection>
            <PageTitleContainer>
                <PageTitle>{t('quotes_service')}</PageTitle>
                <LineDivider>
                    <StyledLine/>
                    <LineImg src={quoteImg}/>
                    <StyledLine/>
                </LineDivider>
            </PageTitleContainer>
            <QuotesContainer/>
        </StyledQuoteSection>
    )
};

export default QuotesSection;
