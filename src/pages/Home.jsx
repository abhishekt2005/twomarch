import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";

const Home = () => {
  let ctx = useContext(CartContext);

  const [Allproducts, setAllproducts] = useState([]);

  const getData = async () => {
    let res = await fetch("https://www.dummyjson.com/products?limit=0");
    let data = await res.json();
    setAllproducts(data.products);
  };

  const [currenPage, setcurrenPage] = useState(1);
  const itemPerPage = 8;
  const lastIndex = itemPerPage * currenPage;
  const firstIndex = lastIndex - itemPerPage;
  let noOfBtn = Math.ceil(Allproducts.length / itemPerPage);

  let slicedArr = Allproducts.slice(firstIndex, lastIndex);

  const handleNext = () => {
    if (currenPage < noOfBtn) {
      setcurrenPage(currenPage + 1);
    }
  };

  const handlePrev = () => {
    if (currenPage > 1) {
      setcurrenPage(currenPage - 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pb-6">
      {/* Product Grid */}
      <div className="p-6 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {slicedArr.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex shadow-lg hover:shadow-2xl transition bg-white gap-2 rounded-lg p-4 flex-col justify-between items-center"
            >
              <img
                src={ele.thumbnail}
                alt={ele.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="text-lg font-semibold text-gray-800">{ele.title}</p>
              <button
                onClick={() => ctx.AddtoCart(ele)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setcurrenPage(1)}
          className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800 transition"
        >
          &larr;
        </button>
        <button
          onClick={handlePrev}
          className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800 transition"
        >
          Prev
        </button>

        {Array(noOfBtn)
          .fill("")
          .map((_, i) => {
            return (
              i + 1 >= currenPage &&
              i + 1 < currenPage + 5 && (
                <button
                  key={i + 1}
                  onClick={() => setcurrenPage(i + 1)}
                  className={`${
                    currenPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-white text-black border border-gray-300"
                  } rounded-md px-3 py-1 transition`}
                >
                  {i + 1}
                </button>
              )
            );
          })}

        {currenPage < noOfBtn - 4 && (
          <button className="text-gray-700 font-semibold rounded-md px-3 py-1">
            ...
          </button>
        )}
        <button
          onClick={handleNext}
          className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800 transition"
        >
          Next
        </button>
        <button
          onClick={() => setcurrenPage(noOfBtn)}
          className="bg-black text-white rounded-md px-3 py-1 hover:bg-gray-800 transition"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Home;
