"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const test: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const limit: number = 50;
  const getData = () => {
    axios
      .get<{ products: Product[] }>(
        `https://strange-retina-377105.el.r.appspot.com/v1/serp-api/products?page=${page}&limit=${limit}`
      )
      .then((res) => {
        const newData: any = res.data;
        console.log(newData);
        setData((prevProducts) => [...prevProducts, ...newData]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {/* Render the products */}
      {data.map((product) => (
        <div key={product.id}>
          {/* Render product details */}
          <h3>{product.id}</h3>
          {/* Additional product information */}
        </div>
      ))}

      {/* Render the Load More button */}
      <button
        onClick={handleLoadMore}
        className="px-4 py-2 border bg-black text-white rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default test;
