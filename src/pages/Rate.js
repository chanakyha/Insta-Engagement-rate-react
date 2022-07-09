import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Rate = () => {
  let query = useLocation();
  console.log(query.search.slice(3));

  const [data, setData] = useState({});
  const [feed, setFeed] = useState({});

  const nFormatter = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://instagram-profile1.p.rapidapi.com/getprofile/${query.search.slice(
        3
      )}`,
      headers: {
        "X-RapidAPI-Key": "3b3bb7ac2fmsh475820956a173c1p1d8bb5jsn4885bd26dbfa",
        "X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        toast.error(error.message);
        // window.location.href = "/";
      });
  }, []);
  useEffect(() => {
    if (!data) return;

    setTimeout(() => {
      let options = {
        method: "GET",
        url: `https://instagram-profile1.p.rapidapi.com/getfeed/${query.search.slice(
          3
        )}`,
        headers: {
          "X-RapidAPI-Key":
            "3b3bb7ac2fmsh475820956a173c1p1d8bb5jsn4885bd26dbfa",
          "X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setFeed(response.data);
        })
        .catch(function (error) {
          toast.error(error.messsage);
          // window.location.href = "/";
        });
    }, 5000);
  }, []);

  useEffect(() => {
    if (data?.error || feed?.error) {
      toast.error("🟥Account not found🟥");
      window.location.href = "/";
    } else if (data?.is_private) {
      toast.error(
        "🟥Account is private🟥 Make Public to Check Engagement Rate"
      );
      window.location.href = "/";
    }
  }, [feed, data]);

  return (
    <div className="w-screen h-full bg-[#fafafb]">
      <Navbar username={data?.username} />
      <div className="flex justify-center items-center mt-7">
        <div className="md:w-1/2 w-screen mt-5">
          <div className="flex md:space-x-7 items-center">
            <img
              loading="lazy"
              onClick={() => {
                window.location.href = `https://www.instagram.com/${data.username}`;
              }}
              className="rounded-full w-32 h-32 border-4 hover:scale-110 ease-in-out duration-300 cursor-pointer"
              src={data?.profile_pic_url_hd_proxy}
              alt="dp"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl mt-5">{data?.username}</h3>
              <div className="flex md:space-x-3 space-x-2 mt-2">
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>
                    {nFormatter(parseInt(data ? data?.lastMedia?.count : 0))}
                  </p>
                  <p>Post</p>
                </div>
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>{nFormatter(parseInt(data ? data?.followers : 0))}</p>
                  <p>Followers</p>
                </div>
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>{nFormatter(parseInt(data ? data?.following : 0))}</p>
                  <p>Following</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 mt-5">
            <h4 className="font-bold">{data?.full_name}</h4>
            <p>{data?.bio}</p>
          </div>
        </div>
      </div>
      <div className="w-screen mt-5 font-bold md:text-3xl text-xl">
        <h1 className="text-center">Your Posts with Engagement Rate 🌟</h1>
        <div className="grid md:grid-cols-3 mt-7 w-screen gap-2 md:px-[12%]">
          {feed.media &&
            feed?.media.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  username={data?.username}
                  profilePic={data?.profile_pic_url_hd_proxy}
                  post={post}
                  followers={data?.followers}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Rate;
