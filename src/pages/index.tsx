import HomeTestimonial from "@/components/common/Testimonial";
import NextPage from "@/components/containers/home/NextPage";

// import PortfolioText from "@/components/containers/home/PortfolioText";
import AboutSection from "@/components/common/AboutSection";
import Banner from "@/components/home/Banner";
import HomeClients from "@/components/common/OurClients";
import HomePortfolio from "@/components/home/HomePortfolio";
import HomeServices from "@/components/home/HomeServices";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout header={1} footer={2}>
      <Banner />
      <AboutSection />
      {/* <PortfolioText /> */}
      <HomePortfolio />
      <HomeClients />
      <HomeServices />
      <HomeTestimonial />
    </Layout>
  );
};

export default Home;
