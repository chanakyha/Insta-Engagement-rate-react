import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-[#fff] md:rounded-lg p-7 drop-shadow-2xl">
        <h1 className="text-2xl md:text-3xl text-center font-bold">
          Search using Instagram Username
        </h1>
        <div className="flex flex-col mt-7 m-7">
          <p className="text-red-500">The Account must be Public</p>
          <input
            placeholder="Instagram Username"
            className="border px-3 py-2 rounded-md"
          />
        </div>
        <div className="space-y-3 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/rate">Check Engagement Rate</Link>
          </button>
          <button
            onClick={() => {
              window.location.href = "https://www.instagram.com/";
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Redirect to Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;