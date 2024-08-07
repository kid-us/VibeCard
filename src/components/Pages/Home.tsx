import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Home/Hero";
import Footer from "../Footer/Footer";
import { tutorial } from "../../assets";
import Loading from "../Loading/Loading";
import homeCard from "../../services/homeCard";
import Faq from "../Home/FAQ";
import HeroCard from "../Home/HeroCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chat from "../ChatBot/Chat";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import Testimonials from "../Home/Testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const [title] = useState("Vibecard - Digital Business Cards");
  useDocumentTitle(title);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Chat></Chat>
      <div>
        <Navbar />
        <div className="lg:container mx-auto lg:mt-40 mt-20 lg:pb-32 pb-14">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="relative lg:pb-1 pb-1">
        <div className="relative right-20 -top-52">
          <div className="absolute w-[5%] lg:w-[10%] lg:right-20 -right-40 bulb"></div>
        </div>
        <div className="absolute lg:left-[45%] left-36 top-6 secondary-bg border-gradient shadow shadow-zinc-900 rounded-full px-4 py-1">
          <p className="text-center text-xs font-extrabold text-white ">
            As simple as this
          </p>
        </div>
        <div className="container mx-auto pt-10 lg:px-0 px-3">
          <div className="border-gradient border-2 rounded-xl overflow-hidden">
            <div className=" lg:rounded-lg rounded overflow-hidden">
              {/* <img src={browse} alt="" /> */}
              <div className="lg:rounded-lg rounded overflow-hidden">
                <video autoPlay muted loop playsInline className="aspect-video">
                  <source src={tutorial} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="relative container mx-auto">
        <HeroCard />
      </div>

      {/* Cards */}
      <div className="border-t border-gray-800 mt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="py-1 px-2 lg:px-0">
            <div className="relative right-20 lg:-top-28 -top-40">
              <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
            </div>
            <p className="text-center mt-16 mb-8 text-gray-500">Features</p>
            <div className="flex justify-center w-full text-center">
              <p className="text-teal-500 font-extrabold lg:text-4xl text-3xl text-center mb-16 lg:w-96 w-80">
                Customize, Connect, and Conquer
              </p>
            </div>
            <div className="lg:grid grid-cols-9 gap-x-5">
              {homeCard.map((card) => (
                <div
                  key={card.id}
                  className="col-span-3 border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-8 secondary-bg"
                >
                  <img src={card.image} alt="Image" className="w-12 mb-5" />
                  <h1 className="text-xl font-extrabold">{card.title}</h1>
                  <p className="text-md mt-4 text-gray-300">{card.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="border-t border-gray-800 mt-10 lg:pb-14 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="text-teal-500 font-extrabold lg:text-4xl text-3xl text-center mb-16 lg:w-96 w-80">
              All Digital Business Cards
            </p>
          </div>
          {/* <Products /> */}
          <Carousel>
            <CarouselContent className="gap-x-2 px-1">
              <CarouselItem className="lg:basis-1/3">
                <Product1></Product1>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <Product2></Product2>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3">
                <Product3></Product3>
              </CarouselItem>
            </CarouselContent>
            <div className="lg:hidden">
              <CarouselPrevious className="absolute z-50 left-0" />
              <CarouselNext className="absolute z-50 right-0" />
            </div>
            <div className="lg:block md:hidden hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-gray-800 mt-10 lg:pb-14 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="text-teal-500 font-extrabold lg:text-4xl text-3xl text-center mb-16 lg:w-96 w-80">
              Testimonials
            </p>
          </div>
          {/* <Testimonies /> */}
          <div className=" gap-x-5 px-2">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="mt-16 lg:px-0 px-4">
        <h1 className="text-center text-2xl text-teal-500">FAQ</h1>
        <div className="mt-10 flex justify-center">
          <div className="lg:w-[60%] w-full">
            <Faq />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
