// React Router
import { Link } from "react-router-dom";
// Data
import { navData } from "../data/navData";
// React Icons
import { LuSearchCode } from "react-icons/lu";

const Header = () => {
  return (
    <>
      <header className="bg-indigo-600 p-4 sm:rounded-t-sm flex justify-between">
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <LuSearchCode size={24} className="text-white" />
            <h1 className="text-white text-lg">Devjobs</h1>
          </div>
          <nav className="flex gap-x-6">
            {navData.map((item, index) => (
              <li key={index} className="list-none">
                <Link to={item.path} className="text-white text-sm">
                  {item.title}
                </Link>
              </li>
            ))}
          </nav>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User Profile Image"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </header>
      <div className="bg-white shadow p-4 sm:rounded-b-sm">
        <h2 className="text-lg">Stats</h2>
      </div>
    </>
  );
};

export default Header;
