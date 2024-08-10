import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { baseUrl } from "@/services/request";

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
      {loading && <Loading />}
      {wallets.length > 0 &&
        wallets.map((wallet) => (
          <Link to={`/wallets/${wallet.wallet_id}`} key={wallet.wallet_id}>
            <div
              key={wallet.wallet_id}
              className="mb-4 rounded overflow-hidden"
            >
              <img
                src={wallet.image}
                alt=""
                className="h-96 w-full object-cover"
              />
            </div>
          </Link>
        ))}
    </>
  );
};

export default Wallets;
