import AboutSection from "@/components/home/AboutSection";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import NextPage from "@/components/containers/home/NextPage";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeBanner from "@/components/home/HomeBanner";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <HomeBanner />
      <AboutSection />
      <PortfolioText />
      <HomeOffer />
      <HomeTestimonial />
      <HomeBlog />
      <HomeSponsor />
      <NextPage />
    </Layout>
  );
};

export default Home;
