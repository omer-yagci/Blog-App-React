import React from "react";
import { useFetch } from "../auth/functions";

const DashBoard = () => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      <h1>DashBoard</h1>
      {isLoading && <h1>loading</h1>}
      {!isLoading &&
        contactList?.map((item, index) => {
          return (
            <h1>
              {item.title}
              {item.image}
              {item.contact}
            </h1>
          );
        })}
    </div>
  );
};

export default DashBoard;
