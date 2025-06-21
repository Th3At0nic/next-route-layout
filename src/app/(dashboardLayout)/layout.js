import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
