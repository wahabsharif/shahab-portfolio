import PortfolioMain from "@/components/containers/PortfolioMain";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const OurPortfolio = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      <PortfolioMain />
    </Layout>
  );
};

export default OurPortfolio;
