import React, { useCallback, useState } from "react";
import { colorButtons, genderButtons, sizeButtons } from "../../assets/data";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  filterProductProps,
  sortByPrice,
} from "../../feature/slices/productsSlice";
import { ButtonGlobal } from "../Buttons/ButtonGlobal";

const btnStyle =
  "text-white w-full bg-blue-700 hover:bg-gray-300 hover:text-black duration-300 ease-in-out px-0 py-2 text-center mobile:max-w-[100px] active:bg-gray-900 active:text-white";

const FilterGoods = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  const [sortPrice, setSortPrice] = useState("asc");

  const toggleSort = useCallback(() => {
    let sortDirection = sortPrice === "asc" ? "desc" : "asc";
    setSortPrice(sortDirection);
    dispatch(sortByPrice(sortPrice));
  }, [sortPrice, dispatch]);

  const clearFilterHandler = useCallback(() => {
    dispatch(clearFilter());
  }, [dispatch]);

  const filteredHandler = useCallback(
    (filterObj) => {
      dispatch(filterObj);
    },
    [dispatch]
  );

  return (
    <div className="flex items-center justify-between py-4 gap-4 flex-wrap">
      <div className="flex w-full min-h-[50px] gap-2 flex-wrap">
        <ButtonGlobal
          title={"clear filters"}
          color="bg-red-900"
          onClick={clearFilterHandler}
        />
        {genderButtons.map((item) => {
          return (
            <ButtonGlobal
              key={item}
              title={item}
              onClick={() =>
                filteredHandler(
                  filterProductProps({ prop: "gender", value: item })
                )
              }
            />
          );
        })}
        <ButtonGlobal
          title={sortPrice === "asc" ? "Price ▼" : "Price ▲"}
          onClick={toggleSort}
        />
        <Menu>
          <MenuHandler>
            <Button
              size="lg"
              variant="filled"
              ripple={true}
              className={`${btnStyle}`}
            >
              color
            </Button>
          </MenuHandler>
          <MenuList>
            {colorButtons.map((item) => {
              return (
                <MenuItem
                  style={{ color: item }}
                  key={item}
                  onClick={() =>
                    filteredHandler(
                      filterProductProps({ prop: "color", value: item })
                    )
                  }
                >
                  {item}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        {type === "Bags" || type === "Shoes" ? (
          ""
        ) : (
          <Menu>
            <MenuHandler>
              <Button
                size="lg"
                variant="filled"
                ripple={true}
                className={`${btnStyle}`}
              >
                size
              </Button>
            </MenuHandler>
            <MenuList>
              {sizeButtons.map((item) => {
                return (
                  <MenuItem
                    key={item}
                    onClick={() =>
                      filteredHandler(
                        filterProductProps({ prop: "size", value: item })
                      )
                    }
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default FilterGoods;
