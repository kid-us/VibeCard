import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Wallets from "../Product/Wallets";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import GoogleReview from "../Product/GoogleReview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";
import { card1, card2, card3, fb, g1, g2, g3, ig, tk } from "@/assets";
import BusinessCard from "../Product/BusinessCard";

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
      <div className="lg:container mx-auto lg:mt-24 mt-14 ">
        <h1 className="lg:text-4xl text-2xl lg:text-center px-2 font-extrabold text-white">
          {t("productTitle")}
        </h1>

        <p className="my-4 text-center text-gray-500 lg:px-0 px-2">
          {t("productDesc")}
        </p>
      </div>

      <div className="lg:container mx-auto mt-16 lg:px-0 px-2">
        <div className="mb-10">
          {/* Business Card */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card1} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card2} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <BusinessCard img={card3} />
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
                <SocialMediaProduct img={ig} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct img={fb} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <SocialMediaProduct img={tk} />
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
                <GoogleReview img={g1} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview img={g3} />
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 md:basis-1/2">
                <GoogleReview img={g2} />
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
