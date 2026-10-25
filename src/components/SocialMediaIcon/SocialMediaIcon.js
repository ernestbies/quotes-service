import {StyledImg, StyledMediaIcon} from "./SocialMediaIcon.styles";
import React from "react";
import {links} from "../../utils/info";

const SocialMediaIcon = ({iconType = 'portfolio'}) => (
    <StyledMediaIcon title={links[iconType].title} href={links[iconType].url} target={'_blank'}>
        <StyledImg src={links[iconType].img}/>
    </StyledMediaIcon>
);

export default SocialMediaIcon;
