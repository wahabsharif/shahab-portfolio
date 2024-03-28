// import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import NextPage from "@/components/containers/home/NextPage";

// import PortfolioText from "@/components/containers/home/PortfolioText";
import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import HomeClients from "@/components/home/HomeClients";
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
      {/* <HomeTestimonial /> */}
    </Layout>
  );
};

export default Home;
