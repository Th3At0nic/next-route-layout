import Footer from "@/components/shared/Footer";

const FooterLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default FooterLayout;
