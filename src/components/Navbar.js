import { AiFillStar } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#fffeff] p-5 px-7 h-20 w-full shadow-md flex items-center justify-between">
      <h2 className="text-xl font-bold hidden md:inline-flex">Instagram</h2>
      <h2 className="text-xl font-bold animate-bounce hidden md:inline-flex">
        Average Engagement Rate: 0.02
      </h2>
      <h2 className="text-xl font-bold flex items-center space-x-2 md:hidden">
        <AiFillStar /> 0.02
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
