import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with Accelar to discuss how our enterprise software infrastructure and AI solutions can help your business."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
