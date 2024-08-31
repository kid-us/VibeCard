import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import GoogleReview from "../Product/GoogleReview";
import Autoplay from "embla-carousel-autoplay";
import BusinessCard from "../Product/BusinessCard";
import { card1, card2, card3, fb, g1, g2, g3, ig, tk } from "@/assets";

const Product = () => {
  return (
    // // {/* Business Card */}
    //       <Carousel>
    //         <CarouselContent>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <BusinessCard img={card1} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <BusinessCard img={card2} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <BusinessCard img={card3} />
    //           </CarouselItem>
    //         </CarouselContent>
    //         <div className="lg:hidden md:block block">
    //           <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
    //           <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
    //         </div>
    //       </Carousel>
    //       // {/* Social Media */}
    //       <Carousel>
    //         <CarouselContent>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <SocialMediaProduct img={ig} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <SocialMediaProduct img={fb} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <SocialMediaProduct img={tk} />
    //           </CarouselItem>
    //         </CarouselContent>
    //         <div className="lg:hidden md:block block">
    //           <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
    //           <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
    //         </div>
    //       </Carousel>
    //       // {/* <Google Review /> */}
    //       <Carousel>
    //         <CarouselContent>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <GoogleReview img={g1} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <GoogleReview img={g3} />
    //           </CarouselItem>
    //           <CarouselItem className="lg:basis-1/3 md:basis-1/2">
    //             <GoogleReview img={g2} />
    //           </CarouselItem>
    //         </CarouselContent>
    //         <div className="lg:hidden md:block block">
    //           <CarouselPrevious className="absolute z-40 left-0 bg-black text-white" />
    //           <CarouselNext className="absolute z-40 right-0 bg-black text-white" />
    //         </div>
    //       </Carousel>
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-x-2 px-1">
        {/* Card */}
        <CarouselItem key={1} className="lg:basis-1/3 md:basis-1/2">
          <BusinessCard img={card1} />
        </CarouselItem>
        <CarouselItem key={2} className="lg:basis-1/3 md:basis-1/2">
          <BusinessCard img={card2} />
        </CarouselItem>
        <CarouselItem key={3} className="lg:basis-1/3 md:basis-1/2">
          <BusinessCard img={card3} />
        </CarouselItem>
        {/* Social */}
        <CarouselItem key={4} className="lg:basis-1/3 md:basis-1/2">
          <SocialMediaProduct img={fb} />
        </CarouselItem>
        <CarouselItem key={5} className="lg:basis-1/3 md:basis-1/2">
          <SocialMediaProduct img={ig} />
        </CarouselItem>
        <CarouselItem key={6} className="lg:basis-1/3 md:basis-1/2">
          <SocialMediaProduct img={tk} />
        </CarouselItem>
        {/* Google */}
        <CarouselItem key={7} className="lg:basis-1/3 md:basis-1/2">
          <GoogleReview img={g1} />
        </CarouselItem>
        <CarouselItem key={8} className="lg:basis-1/3 md:basis-1/2">
          <GoogleReview img={g3} />
        </CarouselItem>
        <CarouselItem key={9} className="lg:basis-1/3 md:basis-1/2">
          <GoogleReview img={g2} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Product;
