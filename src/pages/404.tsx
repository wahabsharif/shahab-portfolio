import ErrorMain from "@/components/containers/ErrorMain";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const ErrorPage = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Error" navigation="Error" />
      <ErrorMain />
    </Layout>
  );
};

export default ErrorPage;
