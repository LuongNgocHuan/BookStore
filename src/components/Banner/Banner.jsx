import LibraryImg from "../../assets/website/library.jpg";

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { IoMdBookmarks } from "react-icons/io";

const Banner = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            {/* image-selection */}
            <div className="">
              <img
                data-aos="zoom-in"
                src={LibraryImg}
                alt=""
                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                object-cover"
              />
            </div>

            {/* text-content-selection */}
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center gap-6 sm:pt-0 "
            >
              <div className="">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Library at your fingertips
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Welcome to our modern library, a vibrant hub of knowledge with
                  an extensive collection of books and digital resources for all
                  ages.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 ">
                  <GrSecure
                    className="text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-violet-100 
                    dark:bg-violet-400 "
                  />
                  <p>Quality Books</p>
                </div>
                <div className="flex items-center gap-4 ">
                  <IoFastFood
                    className="text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-orange-100 
                    dark:bg-orange-400 "
                  />
                  <p>Fast Delivery</p>
                </div>
                <div className="flex items-center gap-4 ">
                  <GiFoodTruck
                    className="text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-green-100 
                    dark:bg-green-400 "
                  />
                  <p>Easy Payment method</p>
                </div>
                <div className="flex items-center gap-4 ">
                  <IoMdBookmarks
                    className="text-4xl w-12 h-12 shadow-sm p-4 rounded-full bg-yellow-100 
                    dark:bg-yellow-400 "
                  />
                  <p>Get offers on books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
