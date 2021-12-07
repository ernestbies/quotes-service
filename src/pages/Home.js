import React from "react";
import Layout from "../components/Layout/Layout";
import QuotesSection from "../components/QuotesSection/QuotesSection";
import InfoSection from "../components/InfoSection/InfoSection";

const Home = () => (
    <Layout title={'home'}>
        <QuotesSection/>
        <InfoSection/>
    </Layout>
);

export default Home;
