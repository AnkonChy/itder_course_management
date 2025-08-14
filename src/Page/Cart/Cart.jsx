/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { RiDeleteBin5Line } from "react-icons/ri";
import { CartContext } from "../../ContextAPIs/CartProvider";
import { LoaderContext } from "../../ContextAPIs/LoaderProvider";

const Cart = () => {
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (sum, course) => sum + course.discount_price * (course.quantity || 1),
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) return;
    showLoader();
    setTimeout(() => {
      navigate("/checkout", { state: { cart, totalPrice } });
      hideLoader();
    }, 1000);
  };

  return (
    <div className="m-mt_16px">
      <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">
        Cart
      </h1>
      <div className="pt-p_16px">
        <div className="lg:flex items-start gap-3">
          <div className="w-full lg:w-[58%] bg-white border-2">
            <table className=" overflow-x-auto  w-full">
              <thead>
                <tr className="border-b-4 border-gray-300">
                  <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                    Course
                  </th>
                  <th className="text-[14.4px] font-bold p-[7px] text-black">
                    Price
                  </th>
                  <th className="text-[14.4px] font-bold p-[7px] text-black">
                    Quantity
                  </th>
                  <th className="text-[14.4px] font-bold p-[7px] text-black">
                    Sub Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-4">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cart.map((course) => (
                    <tr key={course._id} className="border-b border-gray-300">
                      <td>
                        <div className="flex items-center justify-center ">
                          <div className="w-[20%] text-center flex items-center justify-center ">
                            <RiDeleteBin5Line
                              className="text-xl hover:text-footer_color cursor-pointer"
                              onClick={() => removeFromCart(course._id)} // Later implement remove
                            />
                          </div>
                          <div className="flex flex-col text-center justify-center items-center py-2 w-[80%]">
                            <div className="mask">
                              <img
                                className="h-[40px] w-[70px]"
                                src={course.photo}
                                alt={course.course_name}
                              />
                            </div>
                            <p className="text-[14.4px] px-[7px] text-center flex ">
                              {course.course_name}{" "}
                              <span className="hidden lg:flex">
                                - unit name
                              </span>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                          {course.discount_price} BDT
                        </p>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <div className="border">
                            <button className="px-4 w-[30px] font-bold my-1.5">
                              -
                            </button>
                          </div>
                          <div className="border-y">
                            <input
                              type="number"
                              value={course.quantity || 1} // যদি quantity রাখো
                              className="font-bold w-[30px] lg:w-[60px] px-2 text-center mx-auto h-full"
                            />
                          </div>
                          <div className="border">
                            <button className="px-4 w-[30px] font-bold my-1.5">
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                          {course.discount_price * (course.quantity || 1)} BDT
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="lg:w-[41%] bg-white border-2 ">
            <div className="px-[30px]">
              <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                Cart Summary
              </h2>
              <div className="py-3 flex justify-between border-b border-gray-300">
                <p className="text-black font-bold">Total Price</p>
                <p className="text-black font-bold">{totalPrice}</p>
              </div>

              <button
                disabled={cart.length === 0}
                onClick={handleCheckout} // small delay to show loader
                className={`font-medium text-black mb-2 border-2 py-2 px-4 block text-center mx-auto w-full 
    ${
      cart.length === 0
        ? "bg-gray-300 cursor-not-allowed"
        : "hover:bg-[#D2C5A2] bg-white"
    }`}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
