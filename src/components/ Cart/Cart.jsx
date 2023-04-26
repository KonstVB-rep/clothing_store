import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 w-[90%] max-w-[600px]"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto bg-black/50">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-full relative max-w-[600px] transform overflow-hidden rounded-2xl bg-white pt-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute top-2 right-2 cursor-pointer hover:scale-125 focus-visible:scale-125 duration-300 w-[45px] h-[45px] outline-0"
                  onClick={setOpen}
                >
                  <svg
                    data-name="Layer 2"
                    height="100"
                    id="Layer_2"
                    viewBox="0 0 100 100"
                    width="100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    className="w-full h-full hover:fill-gray-700"
                  >
                    <path d="M50,11A39,39,0,1,0,89,50,39.05,39.05,0,0,0,50,11ZM61.12,56.88a3,3,0,0,1,0,4.24,3,3,0,0,1-4.24,0L50,54.24l-6.88,6.88a3,3,0,0,1-4.24,0,3,3,0,0,1,0-4.24L45.76,50l-6.88-6.88a3,3,0,0,1,4.24-4.24L50,45.76l6.88-6.88a3,3,0,0,1,4.24,4.24L54.24,50Z" />
                  </svg>
                </button>
                <Dialog.Title
                  as="h2"
                  className="text-lg font-medium leading-6 text-center "
                >
                  Shopping Bag
                </Dialog.Title>
                {cart.length > 0 ? (
                  <>
                    <div className="mt-2 px-4">
                      {cart.map((item, index) => {
                        return <CartItem key={index} product={item} />;
                      })}
                    </div>
                    <div className="px-4 py-6 bg-gray-900 text-white font-bold relative bottom-1 text-2xl">
                      Total price:
                      <span className="ml-2">{totalPrice}$</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <h4 className="leading-snug text-3xl font-inter font-bold tracking-normal leading-none py-6 bg-gray-900 my-2 px-2 text-white">
                      Your bag is empty.
                      <br /> Add some products
                    </h4>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Cart;
