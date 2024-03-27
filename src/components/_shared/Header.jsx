// React Router
import { Link } from "react-router-dom";
// Data
import { navData } from "../../data/navData";
// React Icons
import { LuSearchCode } from "react-icons/lu";

const Header = () => {
  return (
    <div>
      <header className="bg-indigo-600 px-6 py-4  flex justify-between">
        <div className="flex items-center gap-x-2">
          <LuSearchCode size={24} className="text-white" />
          <h1 className="text-white text-lg">Devjobs</h1>
        </div>
        <div className="flex items-center gap-x-6">
          <nav className="flex gap-x-6">
            {navData.map((item, index) => (
              <li key={index} className="list-none">
                <Link to={item.path} className="text-white text-sm">
                  {item.title}
                </Link>
              </li>
            ))}
          </nav>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User Profile Image"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </header>
      <div className="bg-gray-100 px-6 py-3 flex items-center justify-between">
        <h2 className="text-lg">Stats</h2>

        <Link
          to={"/"}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:scale-105 transition-all"
        >
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Header;
