import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import NextPage from "@/components/containers/home/NextPage";
// import PortfolioText from "@/components/containers/home/PortfolioText";
import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import Layout from "@/components/layout/Layout";
import HomePortfolio from "@/components/home/HomePortfolio";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <Banner />
      <AboutSection />
      {/* <PortfolioText /> */}
      <HomePortfolio />
      <HomeOffer />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsor />
      <NextPage />
    </Layout>
  );
};

export default Home;
