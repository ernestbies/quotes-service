import React from "react";
import {FooterText, StyledFooter} from "./Footer.styles";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation('common');

    return (
        <StyledFooter>
            <FooterText>&copy; 2021 {t('quotes_service')}, ernestbies.com. {t('footer_text')}</FooterText>
        </StyledFooter>
    );
};

export default Footer;
