import FAQs from "@/components/about/FAQs";
import OurMission from "@/components/about/OurMission";

import AboutSection from "@/components/common/AboutSection";
import OurClients from "@/components/common/OurClients";
import Testimonial from "@/components/common/Testimonial";

import AboutCta from "@/components/about/AboutCta";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const About = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="About Us" navigation="About Us" />
      <AboutSection />
      <OurMission />
      <OurClients />
      <FAQs />
      <Testimonial />
      <AboutCta />
    </Layout>
  );
};

export default About;
