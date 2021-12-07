import {LanguageDivider, LanguageType, StyledSelector} from "./LanguageSelector.styles";
import React from "react";
import {useTranslation} from "react-i18next";

const LanguageSelector = () => {

    const {i18n} = useTranslation('common');

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then(() => localStorage.setItem('language', language));
    }

    return (
        <StyledSelector>
            <LanguageType
                active={i18n.language === 'en'}
                onClick={() => changeLanguage('en')}>
                {'En'}
            </LanguageType>
            <LanguageDivider/>
            <LanguageType
                active={i18n.language === 'pl'}
                onClick={() => changeLanguage('pl')}>
                {'Pl'}
            </LanguageType>
        </StyledSelector>
    )
};

export default LanguageSelector;
