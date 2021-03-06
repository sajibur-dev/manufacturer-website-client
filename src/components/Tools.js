import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";
import Tool from "./Tool";

const Tools = () => {
  const { data, isLoading } = useQuery("products", () =>
    fetch("https://frozen-coast-70492.herokuapp.com/products").then(
      (res) => res.json()
    )
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-10 my-10">
          <h1 className="text-2xl">Our Products</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:p-10">
            {data?.map((product) => (
              <Tool product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Tools;
