import {StyledAbsoluteImg, StyledNav} from "./Navbar.styles";
import React from "react";
import inkSplashImg from "../../images/ink-splash.svg";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

const Navbar = () => (
    <StyledNav>
        <LanguageSelector/>
        <StyledAbsoluteImg src={inkSplashImg}/>
    </StyledNav>
);

export default Navbar;
