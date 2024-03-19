// React Router
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      Header
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
