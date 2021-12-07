import React from "react";
import {LoaderText, LoaderWrapper} from "./LoadingSpinner.styles";
import ClipLoader from "react-spinners/ClipLoader";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const LoadingSpinner = ({isConnected}) => {

    const {t} = useTranslation('common');

    return (
        <LoaderWrapper>
            {
                isConnected ?
                    <>
                        <ClipLoader color={'orange'} loading={true} size={70}/>
                        <LoaderText>{t('loading_data')}</LoaderText>
                    </> :
                    <LoaderText isError>{t('loading_error')}</LoaderText>
            }
        </LoaderWrapper>
    );
};

LoadingSpinner.propTypes = {
    isConnected: PropTypes.bool.isRequired
};

export default LoadingSpinner;
