import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <div className="bg-[#fffeff] p-5 px-7 h-20 w-full shadow-md flex items-center justify-between">
      <h2 className="text-xl font-bold">Instagram</h2>
      <h2 className="text-xl animate-bounce hidden md:inline-flex space-x-1">
        <span className="font-bold">Search Resuts for: </span>
        <span
          onClick={() =>
            (window.location.href = `https://www.instagram.com/${username}`)
          }
          className="text-blue-500 cursor-pointer "
        >
          @{username}
        </span>
      </h2>
      <div className="flex">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
          <Link to="/">
            <p>Search Another</p>
          </Link>
          <MdExitToApp />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
