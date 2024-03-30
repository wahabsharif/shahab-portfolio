import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";

const OurPortfolio = () => {
  return (
    <Layout header={1} footer={2}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
    </Layout>
  );
};

export default OurPortfolio;
