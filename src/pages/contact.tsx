import ContactMain from "@/components/containers/ContactMain";

import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const ContactUs = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
