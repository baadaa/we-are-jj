import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/heroArea';
import IntroSection from '../components/introArea';
import ExpertiseSection from '../components/expertiseArea';
import OutroSection from '../components/outroArea';
import Footer from '../components/footerArea';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO />
    <HeroSection />
    <IntroSection />
    <ExpertiseSection />
    <OutroSection />
    <Footer />
  </Layout>
);
export default IndexPage;
