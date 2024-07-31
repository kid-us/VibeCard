import { ceo } from "@/assets";
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
    company: "Kuraz",
    job: "Frontend Developer",
    name: "Kidus WF",
    img: ceo,
    note: "As a traveling sales team meeting countless new vendors worldwide, such as hotels, vibecard business cards have become an essential, modern tool for sharing our information. Compact and professional, these cards greatly simplify networking. They're impressively portable and stylish",
  },
  {
    id: 2,
    company: "Hahu Clods",
    job: "Backend Developer",
    name: "Yakobe Demisse",
    img: ceo,
    note: "The launch of our contactless business cards is another step in our commitment to building a sustainable future and limiting our impact on the planet. We are delighted to be working with vibecard which has developed leading technology",
  },
  {
    id: 1,
    company: "NIB Bank",
    job: "CSO",
    name: "Rediet S.",
    img: ceo,
    note: "People still matter, relationships still matter, an algorithm can't do what this card can do. They are more than just cards; they foster meaningful connections. vibecard cards offer something unique and irreplaceable. We are thrilled to have found a solution that allows us to build stronger relationships",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="gap-x-2 ms-1">
          {testimony.map((t) => (
            <CarouselItem className="lg:basis-1/2 secondary-bg rounded-lg">
              <div key={t.id} className="relative lg:px-10 pb-10 pt-5">
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
        <div className="lg:block md:hidden hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
