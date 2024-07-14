import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import Product4 from "../Product/Product4";
import Product5 from "../Product/Product5";

const Products = () => {
  const [title] = useState("Shop our Products");
  useDocumentTitle(title);
  return (
    <>
      <Navbar />

      <div className="lg:container mx-auto lg:mt-24 mt-14">
        <h1 className="lg:text-4xl text-2xl text-center font-extrabold text-white">
          Vibecard Digital Business Card Accessories
        </h1>

        <p className="my-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="lg:container mx-auto mt-16">
        <div className="mb-10">
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-5 px-2">
            <Product1 />
            <Product2 />
            <Product3 />
            <Product4 />
            <Product5 />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
