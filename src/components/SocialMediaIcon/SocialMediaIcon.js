import {StyledImg, StyledMediaIcon} from "./SocialMediaIcon.styles";
import React from "react";
import {links} from "../../utils/info";
import PropTypes from 'prop-types';

const SocialMediaIcon = ({iconType}) => {

    return (
        <StyledMediaIcon title={links[iconType].title} href={links[iconType].url} target={'_blank'}>
            <StyledImg src={links[iconType].img}/>
        </StyledMediaIcon>
    )
}

SocialMediaIcon.propTypes = {
    iconType: PropTypes.string.isRequired
}

SocialMediaIcon.defaultProps = {
    iconType: 'portfolio'
}

export default SocialMediaIcon;
