import React from "react";
import PropTypes from 'prop-types';
import {StyledPage} from "./Layout.styles";
import {GlobalStyles} from "../../themes/GlobalStyles";
import SEO from "../SEO";
import {ThemeProvider} from "styled-components";
import {theme} from "../../themes/theme";
import Footer from "../../parts/Footer/Footer";
import Navbar from "../../parts/Navbar/Navbar";

const Layout = ({title, children}) => (
    <>
        <SEO title={title}/>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
            <StyledPage>
                <Navbar/>
                {children}
                <Footer/>
            </StyledPage>
        </ThemeProvider>
    </>
);


Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Layout;
