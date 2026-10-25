import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";

const SEO = ({title}) => {

    const {t, i18n} = useTranslation('common');

    useEffect(() => {
        document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    }, [i18n, i18n.resolvedLanguage, i18n.language]);

    return (
        <title>{t(title).toUpperCase() + ' | ' + t('quotes_service').toUpperCase()}</title>
    );
}

export default SEO;
