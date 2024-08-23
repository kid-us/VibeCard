import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import Product4 from "../Product/Product4";
import Wallets from "../Product/Wallets";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import GoogleReview from "../Product/GoogleReview";
import Product5 from "../Product/Product5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [title] = useState("Shop our Products");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Cart />
      <div className="lg:container mx-auto lg:mt-24 mt-14">
        <h1 className="lg:text-4xl text-2xl lg:text-center px-2 font-extrabold text-white">
          {t("productTitle")}
        </h1>

        <p className="my-4 text-center text-gray-500 lg:px-0 px-2">
          {t("productDesc")}
        </p>
      </div>

      <div className="lg:container mx-auto mt-16">
        <div className="mb-10">
          {/* Business Card */}c
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Product2></Product2>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Product1></Product1>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Product3></Product3>
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>

          {/* Social Media */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct bg="bg-black" name="tiktok" />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Product4></Product4>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct bg="bg-blue-500" name="facebook" />
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>

          {/* <Google Review /> */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview bg="bg-white" note="Google Review" />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview bg="bg-black" note="Rate your Experience" />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <Product5></Product5>
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden md:block block">
              <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
              <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
            </div>
          </Carousel>
          {/* Wallets */}
          <Wallets />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
