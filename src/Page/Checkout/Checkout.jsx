import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../ContextAPIs/CartProvider";

const Checkout = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [formNo, setFormNo] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [school, setSchool] = useState("");
  const [jobInfo, setJobInfo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [nid, setNid] = useState("");
  const [mobile, setMobile] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const { cart, totalPrice } = location.state || {};

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      formNo,
      parentName,
      parentNumber,
      school,
      jobInfo,
      email,
      gender,
      presentAddress,
      permanentAddress,
      nid,
      mobile,
      guardianName,
      dob,
      bloodGroup,
    };

    console.log("Form Data:", formData);
    console.log("Cart Items:", cart);
  };
  return (
    <div className="  mt-5 border mx-2">
      <div class="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form onSubmit={handleAdd} className="bg-white shadow-md rounded-lg p-6">
        {/* Trainee Information Section */}
        <div className="form-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="fullName"
                className="block font-semibold text-base mb-2"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="formNo"
                className="block font-semibold text-base mb-2"
              >
                Form no:
              </label>
              <input
                type="text"
                id="formNo"
                onChange={(e) => setFormNo(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Father/Mother Name:
              </label>
              <input
                type="text"
                id="parentName"
                onChange={(e) => setParentName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="parentNumber"
                className="block font-semibold text-base mb-2"
              >
                Number:
              </label>
              <input
                type="text"
                id="parentNumber"
                onChange={(e) => setParentNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="school"
                className="block font-semibold text-base mb-2"
              >
                School/College:
              </label>
              <input
                type="text"
                id="school"
                onChange={(e) => setSchool(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="jobInfo"
                className="block font-semibold text-base mb-2"
              >
                Job Information:
              </label>
              <input
                type="text"
                id="jobInfo"
                onChange={(e) => setJobInfo(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-base mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block font-semibold text-base mb-2"
              >
                Gender:
              </label>
              <select
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="presentAddress"
                className="block font-semibold text-base mb-2"
              >
                Present Address:
              </label>
              <textarea
                id="presentAddress"
                onChange={(e) => setPresentAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block font-semibold text-base mb-2"
              >
                Permanent Address:
              </label>
              <textarea
                id="permanentAddress"
                onChange={(e) => setPresentAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="nid"
                className="block font-semibold text-base mb-2"
              >
                NID Number:
              </label>
              <input
                type="text"
                id="nid"
                onChange={(e) => setNid(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block font-semibold text-base mb-2"
              >
                Mobile No:
              </label>
              <input
                type="text"
                id="mobile"
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="guardianName"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian’s Name:
              </label>
              <input
                type="text"
                id="guardianName"
                onChange={(e) => setGuardianName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block font-semibold text-base mb-2"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="bloodGroup"
                className="block font-semibold text-base mb-2"
              >
                Blood Group:
              </label>
              <select
                id="bloodGroup"
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled selected>
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="m-mt_16px">
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

                  <tbody className="overflow-x-auto">
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center p-4">
                          Your cart is empty
                        </td>
                      </tr>
                    ) : (
                      cart.map((course) => (
                        <tr
                          key={course._id}
                          className="border-b border-gray-300 overflow-x-auto"
                        >
                          <td>
                            <div className="flex items-center justify-center">
                              <div className="w-[20%] text-center flex items-center justify-center">
                                <RiDeleteBin5Line
                                  className="text-xl hover:text-footer_color cursor-pointer"
                                  onClick={() => removeFromCart(course._id)} // remove function
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
                                <p className="text-[14.4px] px-[7px] text-center flex">
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
                                <button
                                  className="px-4 w-[30px] font-bold font_standard my-1.5"
                                  onClick={() => decreaseQuantity(course._id)}
                                >
                                  -
                                </button>
                              </div>
                              <div className="border-y">
                                <input
                                  type="number"
                                  value={course.quantity || 1}
                                  className="font-bold w-[30px] lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
                                  readOnly
                                />
                              </div>
                              <div className="border">
                                <button
                                  className="px-4 w-[30px] font-bold font_standard my-1.5"
                                  onClick={() => increaseQuantity(course._id)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                              {course.discount_price * (course.quantity || 1)}{" "}
                              BDT
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
                    <p className="text-black font-bold">{totalPrice} BDT</p>
                  </div>

                  <Link
                    state={"bdt"}
                    className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                  >
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
