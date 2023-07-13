import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CartList } from "./CartList";
import { FooterCart } from "./FooterCart";
import { CartEmpty } from "./CartEmty";
import { CartModal } from "./CartModal";

const Cart = ({ openModal, setOpen }) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10 w-[90%]" onClose={setOpen}>
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
        <CartModal setOpen={setOpen}>
          <CartList />
          <FooterCart />
          <CartEmpty />
        </CartModal>
      </Dialog>
    </Transition>
  );
};

export default Cart;
