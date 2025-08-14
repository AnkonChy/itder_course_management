import React, { useContext, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../ContextAPIs/CartProvider";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [localGuardianName, setLocalGuardianName] = useState("");
  const [localGuardianPhone, setLocalGuardianPhone] = useState("");
  const [nidNo, setNidNo] = useState("");
  const [dob, setDob] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const course_id = "2";
  const course_fee = "4500";
  const course_qty = cart.length;
  const total_course_fee = cart.reduce(
    (acc, current) => acc + Number(current.regular_price),
    0
  );
  const admission_date = Date.now().toLocaleString();
  const discount_course_fee = "4500";
  const sub_total_course_fee = "4500";
  const { totalPrice } = location.state || {};

  const handleAdd = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("course_id", course_id);
    data.append("admission_date", admission_date);
    if (photoFile) data.append("photo", photoFile);
    data.append("name", name);
    data.append("father_name", parentName);
    data.append("father_phone_no", parentNumber);
    data.append("school_collage_name", schoolName);
    data.append("job_title", jobTitle);
    data.append("email", email);
    data.append("gender", gender);
    data.append("present_address", presentAddress);
    data.append("permanent_address", permanentAddress);
    data.append("nid_no", nidNo);
    data.append("phone_no", phoneNo);
    data.append("local_guardian_name", localGuardianName);
    data.append("local_guardian_phone_no", localGuardianPhone);
    data.append("date_of_birth", dob);
    data.append("blood_group", bloodGroup);
    data.append("course_fee", course_fee);
    data.append("course_qty", course_qty);
    data.append("total_course_fee", total_course_fee);
    data.append("discount_course_fee", discount_course_fee);
    data.append("sub_total_course_fee", sub_total_course_fee);

    const response = await fetch("https://itder.com/api/course-purchase", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    toast.success(result.message);

    navigate("/order-details", {
      state: { orderDetails: result.coursePurchaseData },
    });
  };

  return (
    <div className="mt-5 border mx-2">
      <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form onSubmit={handleAdd} className="bg-white shadow-md rounded-lg p-6">
        <div className="form-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-base mb-2"
              >
                Name:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-base mb-2"
              >
                Email:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block font-semibold text-base mb-2"
              >
                Phone No:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setPhoneNo(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Father / Mother Name:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setParentName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-base mb-2"
              >
                Father / Mother Phone No:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setParentNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-base mb-2"
              >
                School / College Name:
              </label>
              <input
                required
                type="text"
                onChange={(e) => setSchoolName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="parentName"
                className="block font-semibold text-base mb-2"
              >
                Job Title
              </label>
              <input
                required
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian Name
              </label>
              <input
                required
                type="text"
                onChange={(e) => setLocalGuardianName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-base mb-2"
              >
                Local Guardian Phone
              </label>
              <input
                required
                type="text"
                onChange={(e) => setLocalGuardianPhone(e.target.value)}
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
                NID No
              </label>
              <input
                required
                type="text"
                id="parentName"
                onChange={(e) => setNidNo(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="parentNumber"
                className="block font-semibold text-base mb-2"
              >
                Date of Birth
              </label>
              <input
                required
                type="date"
                id="parentNumber"
                onChange={(e) => setDob(e.target.value)}
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
                Present Address
              </label>
              <input
                required
                type="text"
                id="school"
                onChange={(e) => setPresentAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="jobInfo"
                className="block font-semibold text-base mb-2"
              >
                Permanent Address
              </label>
              <input
                required
                type="text"
                id="jobInfo"
                onChange={(e) => setPermanentAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                required
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="bloodGroup"
                className="block font-semibold text-base mb-2"
              >
                Blood Group:
              </label>
              <select
                required
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
          <div className="grid grid-cols-1 md:grid-cols-1 mb-4">
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block font-semibold text-base mb-2"
              >
                Upload Photo:
              </label>
              <input
                required
                type="file"
                id="photo"
                accept="image/*"
                onChange={(e) => setPhotoFile(e.target.files[0])} // store the selected file
                className="w-full border border-gray-300 rounded-md py-10"
              />
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

                  <button
                    type="submit"
                    className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md"
                  >
                    Submit
                  </button>
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
