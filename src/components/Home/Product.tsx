import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Product1 from "../Product/Product1";
import Product2 from "../Product/Product2";
import Product3 from "../Product/Product3";
import SocialMediaProduct from "../Product/SocialMediaProduct";
import Product4 from "../Product/Product4";
import GoogleReview from "../Product/GoogleReview";
import Product5 from "../Product/Product5";
import Autoplay from "embla-carousel-autoplay";

const Product = () => {
  return (
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
          <Product1 />
        </CarouselItem>
        <CarouselItem key={2} className="lg:basis-1/3 md:basis-1/2">
          <Product2 />
        </CarouselItem>
        <CarouselItem key={3} className="lg:basis-1/3 md:basis-1/2">
          <Product3 />
        </CarouselItem>
        {/* Social */}
        <CarouselItem key={4} className="lg:basis-1/3 md:basis-1/2">
          <SocialMediaProduct key={1} bg="bg-black" name="tiktok" />
        </CarouselItem>
        <CarouselItem key={5} className="lg:basis-1/3 md:basis-1/2">
          <Product4 />
        </CarouselItem>
        <CarouselItem key={6} className="lg:basis-1/3 md:basis-1/2">
          <SocialMediaProduct key={2} bg="bg-blue-500" name="facebook" />
        </CarouselItem>
        {/* Google */}
        <CarouselItem key={7} className="lg:basis-1/3 md:basis-1/2">
          <GoogleReview key={3} bg="bg-white" note="Google Review" />
        </CarouselItem>
        <CarouselItem key={8} className="lg:basis-1/3 md:basis-1/2">
          <GoogleReview key={4} bg="bg-black" note="Rate your Experience" />
        </CarouselItem>
        <CarouselItem key={9} className="lg:basis-1/3 md:basis-1/2">
          <Product5 />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Product;
