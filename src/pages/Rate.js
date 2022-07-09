import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import { data, feed } from "../api/sampleData";
import { useState } from "react";

console.log(feed);

const Rate = () => {
  return (
    <div className="w-screen h-full bg-[#fafafb]">
      <Navbar username={data.username} />
      <div className="flex justify-center items-center mt-7">
        <div className="md:w-1/2 w-screen mt-5">
          <div className="flex md:space-x-7 items-center">
            <img
              loading="lazy"
              onClick={() => {
                window.location.href = `https://www.instagram.com/${data.username}`;
              }}
              className="rounded-full w-32 h-32 border-4 hover:scale-110 ease-in-out duration-300 cursor-pointer"
              src={data.profile_pic_url_hd_proxy}
              alt="dp"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl mt-5">{data.username}</h3>
              <div className="flex md:space-x-3 space-x-2 mt-2">
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>{data.lastMedia.count}</p>
                  <p>Post</p>
                </div>
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>{data.followers}</p>
                  <p>Followers</p>
                </div>
                <div className="flex flex-col md:space-x-1  md:flex-row items-center">
                  <p>{data.following}</p>
                  <p>Following</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 mt-5">
            <h4 className="font-bold">{data.full_name}</h4>
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
      <div className="w-screen mt-5 font-bold md:text-3xl text-xl">
        <h1 className="text-center">Your Posts with Engagement Rate 🌟</h1>
        <div className="grid md:grid-cols-3 mt-7 w-screen gap-2 md:px-[12%]">
          {feed.media.map((post, index) => {
            return (
              <PostCard
                key={index}
                username={data.username}
                profilePic={data.profile_pic_url_hd_proxy}
                post={post}
                followers={data.followers}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rate;
