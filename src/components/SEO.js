import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from "react-i18next";

const SEO = ({title}) => {

    const {t} = useTranslation('common');

    return (
        <Helmet title={t(title).toUpperCase() + ' | ' + t('quotes_service').toUpperCase()}
                htmlAttributes={{lang: 'en'}}
                meta={[
                    {
                        name: `description`,
                        content: 'Quotes Service created by Ernest Bieś',
                    }
                ]}
        />
    );
}

export default SEO;
