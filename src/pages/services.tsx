import Testimonial from "@/components/common/Testimonial";

import CtaTwo from "@/components/services/CtaTwo";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

import UxProcessTwo from "@/components/services/OurProcess";
import ServiceMain from "@/components/services/ServiceMain";

const Services = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <UxProcessTwo />
      <Testimonial />
      <CtaTwo />
    </Layout>
  );
};

export default Services;
