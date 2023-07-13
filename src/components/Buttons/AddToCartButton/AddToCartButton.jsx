import { message } from "antd";
import { ButtonGlobal } from "../ButtonGlobal";
import { addToCart } from "feature/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCartButton = ({ product }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product has been added to the cart",
    });
  };

  const addProduct = () => {
    dispatch(addToCart(product));
    success();
  };
  return (
    <>
      {contextHolder}
      <ButtonGlobal title="add to cart" onClick={addProduct} />
    </>
  );
};

export default AddToCartButton;
