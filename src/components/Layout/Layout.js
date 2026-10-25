import React from "react";
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

export default Layout;
