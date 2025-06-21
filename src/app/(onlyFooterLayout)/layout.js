import Footer from "@/components/shared/Footer";
import React from "react";

const FooterLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default FooterLayout;
