// React Router
import { Outlet } from "react-router-dom";
// Components
import { Header } from "../../components";

const DashboardLayout = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
