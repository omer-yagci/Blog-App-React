import React from "react";
import { useFetch } from "../auth/functions";
import BlogCard from "../components/BlogCard";
import Spinner from "../helpers/Spinner";

const DashBoard = () => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      <div className="flex justify-center gap-2 mb-12 items-center">
        <span className="w-[12rem] h-1 bg-blue-300 "></span>
        <p className="text-2xl uppercase text-green-300">Dashboard</p>
        <span className="w-[12rem] h-1 bg-blue-300 "></span>
      </div>

      {/* {isLoading && <Spinner />} */}
      {contactList?.length === 0 && (
        <h1 className="text-2xl uppercase text-green-300">
          There are no blogs go to the new blog page to create a new blog
        </h1>
      )}
      {!isLoading &&
        contactList?.map((element, index) => {
          return <BlogCard key={index} element={element} />;
        })}
    </div>
  );
};

export default DashBoard;
