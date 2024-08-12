import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { baseUrl } from "@/services/request";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export interface Wallets {
  color: string;
  description: string;
  image: string;
  price: number;
  size: string;
  wallet_id: string;
  name: string;
}

export interface All {
  wallets: Wallets[];
}

const Wallets = () => {
  const [wallets, setWallets] = useState<Wallets[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<All>(`${baseUrl}/api/v1/products/get-wallets`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);
        setWallets(response.data.wallets);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <>
      <Carousel>
        {loading && <Loading />}
        <CarouselContent>
          {wallets.length > 0 &&
            wallets.map((wallet) => (
              <CarouselItem
                key={wallet.wallet_id}
                className="lg:basis-1/3 md:basis-1/2"
              >
                <Link to={`/wallets/${wallet.wallet_id}`}>
                  <div
                    key={wallet.wallet_id}
                    className="mb-4 rounded overflow-hidden"
                  >
                    <img
                      src={wallet.image}
                      alt="wallets"
                      className=" w-full object-cover"
                    />
                  </div>
                </Link>
                {/* Color */}
                <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
                  <p className="text-lg text-white font-poppins no-select">
                    RFID Kreditkarten Halter
                  </p>
                  <p className="text-xs text-white font-poppins">
                    Price{" "}
                    <span className="text-teal-500 font-poppins text-sm font-bold">
                      €24.99
                    </span>
                  </p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="absolute z-50 left-0 bg-black text-white" />
          <CarouselNext className="absolute z-50 right-0 bg-black text-white" />
        </div>
      </Carousel>
    </>
  );
};

export default Wallets;
