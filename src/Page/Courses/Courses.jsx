import { useLoaderData } from "react-router-dom";
import { TbCoinTaka } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../../ContextAPIs/CartProvider";

const Courses = () => {
  const { courseData } = useLoaderData();
  const { addToCart } = useContext(CartContext);
  console.log(courseData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-10 gap-6">
      {courseData.map((course) => (
        <div
          key={course?._id}
          className=" flex flex-col h-full hover:scale-105 rounded-lg shadow-md transition-all duration-700"
        >
          <figure>
            <img
              className="rounded-t-lg w-full h-56 object-cover"
              src={course?.photo}
              alt="Virtual Classroom"
            />
          </figure>
          <div className="px-4 py-3 space-y-2 flex-grow">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-2xl">{course?.course_name}</h2>
            </div>
            <p className="text-gray-600 mt-2">{course?.shortDescription}</p>
            <div className="flex items-center justify-between pb-2">
              <div>
                <p className="font-semibold">
                  Trainer: {course?.trainer_data?.name}
                </p>
              </div>
              <div>
                <button className="text-xs font-bold px-6 py-1 rounded-full bg-blue-200 my-shadow">
                  <span className="font-semibold">{course?.status}</span>
                </button>
              </div>
            </div>
            <hr className=" border-t-2 border-gray-300 pt-2" />

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-base font-semibold text-gray-500 line-through">
                  {course?.regular_price}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbCoinTaka className="text-xl" />
                <p className="text-lg font-bold text-[#603186]">
                  {course?.discount_price}
                </p>
              </div>

              {course?.regular_price && course?.discount_price && (
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-0.5 rounded-full">
                  {Math.round(
                    ((course?.regular_price - course?.discount_price) /
                      course?.regular_price) *
                      100
                  )}
                  % OFF
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <div className="gap-3 flex text-base mt-4">
              <button
                onClick={() => addToCart(course)}
                className="px-4 py-2 hover:bg-[#352b61] bg-[#603186] text-white duration-500"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
