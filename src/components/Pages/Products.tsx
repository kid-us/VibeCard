import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SampleProducts from "./Home/SampleProducts";

const Products = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto lg:mt-24 mt-14">
        <h1 className="lg:text-4xl text-2xl text-center font-extrabold text-white">
          Vibecard Digital Business Card Accessories
        </h1>

        <p className="my-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="container mx-auto mt-16">
        <div className="mb-10">
          <SampleProducts />
        </div>
        <div className="mb-10">
          <SampleProducts />
        </div>
        <div className="mb-10">
          <SampleProducts />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
