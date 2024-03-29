import React from "react";
import Layout from "@/components/layout/Layout";
import HomeFiveBanner from "@/components/layout/banner/HomeFiveBanner";
import HomeTestimonial from "@/components/common/Testimonial";

const HomeFiveLight = () => {
  return (
    <Layout header={5} footer={4} video={true}>
      <HomeFiveBanner />
      <HomeTestimonial />
    </Layout>
  );
};

export default HomeFiveLight;
