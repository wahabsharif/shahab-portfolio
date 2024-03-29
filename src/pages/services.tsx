import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/services/ServiceMain";
import UxProcessTwo from "@/components/services/OurProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import Testimonial from "@/components/common/Testimonial";

const Services = () => {
  return (
    <Layout header={1} footer={2}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <UxProcessTwo />
      <Testimonial />
      <CtaTwo />
    </Layout>
  );
};

export default Services;
