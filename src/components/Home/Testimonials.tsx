import { dallol, sitra } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  job: string;
  company: string;
  img: string;
  note: string;
}

const testimony: Testimonial[] = [
  {
    id: 1,
    company: "Dallol ",
    job: "Company",
    name: "Dallol",
    img: dallol,
    note: "Partnering with Vibecard has revolutionized our team's networking efforts. As a company that thrives on building strong business relationships, Vibecard has made it incredibly easy for our team members to share contact information and connect with clients seamlessly. The digital business card solution has not only saved us money on printing costs but has also enhanced our brand's image as forward-thinking and tech-savvy. Vibecard is now an integral part of our business operations, and we can't imagine networking without it.",
  },
  {
    id: 2,
    company: "Social Media",
    job: "Social Media Influencer",
    name: "Sitra",
    img: sitra,
    note: "Vibecard has completely transformed the way I network! As someone constantly attending events, the ease of instantly sharing my contact details with just a tap is invaluable. No more fumbling around with business cards or worrying about running out. The seamless integration with my digital profiles has made my connections more meaningful and my follow-ups more efficient. Vibecard is a must-have tool for anyone serious about making lasting connections in the modern world.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="gap-x-2 ms-1">
          {testimony.map((t) => (
            <CarouselItem
              key={t.id}
              className="lg:basis-1/2 secondary-bg rounded-lg"
            >
              <div className="relative lg:px-10 pb-10 pt-5">
                <img
                  src={t.img}
                  alt="Photo"
                  className="w-24 h-24 object-cover rounded-full"
                />
                <p className="absolute bi-quote right-0 top-0 text-gray-700 text-9xl "></p>
                <p className="ms-3 mt-5 text-xl font-bold font-poppins text-white">
                  {t.name}
                </p>
                <p className="ms-3 my-2 text-white">{t.job}</p>
                <p className="ms-3 text-sm text-gray-200">{t.note}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="lg:hidden">
          <CarouselPrevious className="absolute -left-2" />
          <CarouselNext className="absolute -right-2" />
        </div>
        {/* <div className="lg:block md:hidden hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
