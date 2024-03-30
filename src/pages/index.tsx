import AboutSection from "@/components/common/AboutSection";
import OurClients from "@/components/common/OurClients";
import Testimonial from "@/components/common/Testimonial";

import Banner from "@/components/home/Banner";
import HomePortfolio from "@/components/home/HomePortfolio";
import HomeServices from "@/components/home/HomeServices";

import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <Banner />
      <AboutSection />
      <HomePortfolio />
      <OurClients />
      <HomeServices />
      <Testimonial />
    </Layout>
  );
};

export default Home;
