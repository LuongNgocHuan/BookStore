/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";

const PopupOrder = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50 dark:bg-white/20">
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900
          dark:text-white duration-200 p-4 rounded-lg shadow-md w-[300px]"
          >
            {/* header  */}
            <div className="flex items-center justify-between">
              <h1 className="">Order Your Book</h1>
              <div className="">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOrderPopup(false)}
                />
              </div>
            </div>

            {/* form-body  */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
              px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
              px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800
              px-2 py-1 mb-4"
              />

              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg px-8 py-2
                    hover:scale-105 duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupOrder;
