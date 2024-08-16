import useWallets from "@/hooks/useWallets";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";

interface Props {
  home?: boolean;
}

const Cart = ({ home }: Props) => {
  const { allWallets } = useWallets();

  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );
  const clearCart = useCartStore((state) => state.clearCart);
  const emptyCart = cart.length === 0;

  const [viewCart, setViewCart] = useState<boolean>(false);

  const getWalletImg = (id: string) => {
    const wallet = allWallets.find((wal) => wal.wallet_id === id);
    return wallet ? wallet.image : "default-image.png";
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartItemQuantity(id, quantity);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <>
      {!emptyCart && (
        <>
          <div className="relative">
            <button
              onClick={() => setViewCart(true)}
              className={`fixed ${
                home ? "bottom-24 right-5" : "bottom-4 right-2"
              }  z-50 bi-cart-fill font-poppins btn-bg shadow text-xl text-white rounded-full p-0 w-12 h-12 md:w-14 md:h-14`}
            >
              <span className="font-poppins ms-1 text-sm">{cart.length}</span>
            </button>
          </div>

          {viewCart && (
            <>
              <div className="overlay z-40"></div>
              <div className="secondary-bg shadow shadow-teal-500 w-[98%] md:w-[60%] lg:w-[28%] lg:h-[90%] h-[100%] fixed lg:top-20 top-0 right-0  z-50">
                <div className="flex justify-between px-5 pt-5">
                  <p className="text-white font-poppins font-bold text-xl">
                    {cart.length} Cart
                  </p>
                  <button
                    onClick={() => setViewCart(false)}
                    className="bi-x-lg text-white"
                  ></button>
                </div>
                <div className="h-[65%] bg-zinc-900 rounded mx-1 overflow-y-scroll p-5 mt-5">
                  {cart.map((c) => (
                    <div className="grid grid-cols-10 mb-4 gap-x-3 border-b border-gray-700 pb-4">
                      <div className="col-span-4">
                        <img
                          src={getWalletImg(c.id)}
                          alt="cart-item"
                          className="rounded"
                        />
                      </div>
                      <div className="col-span-4">
                        <div className="flex gap-x-2 h-full items-center">
                          <input
                            type="number"
                            className="w-full text-center font-poppins font-bold text-xl rounded h-10 focus:outline-none"
                            value={c.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                c.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center h-full">
                        <button
                          onClick={() => {
                            cart.length === 1 && setViewCart(false);
                            removeFromCart(c.id);
                          }}
                          className="bg-red-500 w-full h-10 bi-trash-fill text-white rounded"
                        ></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mx-3">
                  <button
                    onClick={() => {
                      setViewCart(false);
                      clearCart();
                    }}
                    className="bg-red-600 shadow shadow-zinc-900 bi-trash font-poppins w-full text-white rounded mt-3 h-12"
                  >
                    Clear Cart
                  </button>

                  <button className="bg-teal-600 shadow shadow-zinc-900 font-poppins w-full text-white rounded mt-3 h-12">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
