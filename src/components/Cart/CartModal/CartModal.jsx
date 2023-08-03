import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseCircleFill } from "react-icons/ri";

const CartModal = ({ setOpen, children }) => {
  return (
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
          <Dialog.Panel className=" w-full max-h-[87vh] relative max-w-[1000px] transform overflow-hidden rounded-2xl bg-white pt-10 text-left align-middle shadow-xl transition-all">
            <button
              className="absolute top-0 right-0 cursor-pointer hover:scale-125 focus-visible:scale-125 duration-300 w-[45px] h-[45px] outline-0 bg-white rounded-[50%]"
              onClick={setOpen}
            >
              <RiCloseCircleFill className="text-red-700 w-full h-full hover:text-gray-700 focus-visible:text-gray-700" />
            </button>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

export default CartModal;
