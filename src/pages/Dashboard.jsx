import React from "react";
import { useFetch } from "../auth/functions";
import BlogCard from "../components/BlogCard";

const DashBoard = () => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      {/* <h1>DashBoard</h1> */}
      {isLoading && <h1>loading</h1>}
      {contactList?.length === 0 && <h1>data mata yok </h1>}
      {!isLoading &&
        contactList?.map((element, index) => {
          return <BlogCard key={index} element={element} />;
        })}
    </div>
  );
};

export default DashBoard;
