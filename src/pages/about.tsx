import AboutSection from "@/components/common/AboutSection";
import OurClients from "@/components/common/OurClients";
import Testimonial from "@/components/common/Testimonial";
import AboutCta from "@/components/containers/home-two/AboutCta";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const About = () => {
  return (
    <Layout header={1} footer={2}>
      <CmnBanner title="About Us" navigation="About Us" />
      <AboutSection />
      <Testimonial />
      <OurClients />
      <AboutCta />
    </Layout>
  );
};

export default About;
