import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Image */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <img
          src="https://images.pexels.com/photos/3857400/pexels-photo-3857400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="coding-image"
          className="h-screen w-full object-cover"
        />
      </div>
      {/* Form */}
      <div className="w-full md:w-1/2 md:order-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
