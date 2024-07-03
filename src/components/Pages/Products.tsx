import { Link } from "react-router-dom";
import { product } from "../../services/products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Products = () => {
  return (
    <>
      <Navbar bg={"bg-white shadow"} />

      <div className="container mx-auto lg:mt-16 mt-14">
        <h1 className="lg:text-4xl text-2xl text-center font-extrabold">
          Vibecard Digital Business Card Accessories
        </h1>

        <p className="my-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="menu-bg ">
        <div className="container mx-auto lg:mt-10">
          <div className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 lg:pt-20 pt-10 px-2">
            {product.map((pro) => (
              <div
                key={pro.id}
                className="lg:hover:bg-white lg:bg-transparent bg-white shadow-gray-500 mb-10 hover:scale-105"
              >
                <Link to={`/product/${pro.id}`}>
                  <img
                    src={pro.image}
                    alt="card picture"
                    className="shadow shadow-zinc-800 rounded"
                  />
                  <div className="py-5 px-3 border-b-2 rounded shadow">
                    <p className="font-poppins text-xl font-extrabold">
                      {pro.name}
                    </p>
                    <div className="flex justify-between">
                      <div className="flex justify-between gap-x-10 mt-2">
                        <div>
                          <p className="font-poppins">{pro.type}</p>
                        </div>
                        <div>
                          <p className="font-poppins">{pro.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-x-10">
                        {pro.color.map((c) => (
                          <div
                            key={c.id}
                            className="h-8 w-10 border-2 rounded"
                            style={{ backgroundColor: c.color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
