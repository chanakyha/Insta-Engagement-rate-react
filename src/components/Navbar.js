import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#fffeff] p-5 px-7 h-20 w-full shadow-md flex items-center justify-between">
      <h2 className="text-xl font-bold">Instagram</h2>
      <div className="flex">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
          <Link to="/login">
            <p>Logout</p>
          </Link>
          <MdExitToApp />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
