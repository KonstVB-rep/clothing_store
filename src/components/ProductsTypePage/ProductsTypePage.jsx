import React from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { colorButtons, genderButtons, sizeButtons } from "../../assets/data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectFilteredProducts,
  selectError,
} from "../../feature/slices/productsSlice";
import ProductCard from "./ProductCard";
import { Error } from "../Error";

const btnStyle =
  "text-white h-full w-full hover:bg-gray-300 hover:text-black duration-300 ease-in-out px-0 text-center mobile:w-[175px]";

const ProductsTypePage = () => {
  const { type } = useParams();

  const products = useSelector(selectFilteredProducts);
  const error = useSelector(selectError);

  return (
    <div>
      <div className="pt-16 bg-gradient-to-r from-cyan-200 to-cyan-500">
        <div className="px-4">
          <h1 className="text-white bg-black text-center py-4 rounded-3xl text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8 gap-4 flex-wrap">
            <div className="flex items-center min-h-[70px] gap-2 flex-wrap">
              {genderButtons.map((item, index) => {
                return (
                  <Button
                    key={index}
                    size="lg"
                    variant="filled"
                    ripple={true}
                    className={`${btnStyle}`}
                    // onClick={() => dispatch(filterGender(item))}
                  >
                    {item}
                  </Button>
                );
              })}
              <Button
                size="lg"
                variant="filled"
                ripple={true}
                className={`${btnStyle}`}
                // onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    size="lg"
                    variant="filled"
                    ripple={true}
                    className={`${btnStyle}`}
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        // onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    size="lg"
                    variant="filled"
                    ripple={true}
                    className={`${btnStyle}`}
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        // onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="h-[70px] min-[480px]: w-full">
              <Button
                size="lg"
                variant="filled"
                ripple={true}
                className="text-black bg-deep-orange-300 h-full hover:bg-gray-300 hover:duration-300 ease-in-out w-full px-0 text-center mobile:w-[175px]"
                // onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-fit justify-items-center py-8 px-4 gap-6">
            {products.map((product, index) => {
              return <ProductCard key={index} {...product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductsTypePage;
