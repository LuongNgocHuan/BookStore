/* eslint-disable react/jsx-key */
import { FaStar } from "react-icons/fa";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/bookbest1.jpg";
import Book5 from "../../assets/books/bookbest2.jpg";
import Book6 from "../../assets/books/bookbest3.jpg";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Ruyi's Royal Love in the Palace",
    rating: "4.2",
    author: "Liu Lianzi",
  },
  {
    id: 2,
    img: Book2,
    title: "Call Me by Your Name",
    rating: "5.0",
    author: "James Ivory",
  },
  {
    id: 3,
    img: Book3,
    title: "Twilight (Meyer novel)",
    rating: "4.5",
    author: "Stephenie Meyer",
  },
  {
    id: 4,
    img: Book4,
    title: "Harry Potter",
    rating: "4.3",
    author: "J. K. Rowling",
  },
  {
    id: 5,
    img: Book5,
    title: "Lam Di",
    rating: "4.5",
    author: "Vu Trong Phung",
  },
  {
    id: 6,
    img: Book6,
    title: "Doraemon",
    rating: "4.0",
    author: "Fujiko F. Fujio",
  },
];

const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold ">Top Book</h1>
            <p className="text-xs text-gray-400">
              Reading great books in English enriches knowledge and broadens
              perspectives, offering timeless stories, valuable lessons, and
              profound insights.
            </p>
          </div>

          {/* cart  */}
          <div data-aos="slide-up" className="">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center
            gap-5"
            >
              {BooksData.map((data) => (
                <div className="space-y-3">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />

                  <div>
                    <h2 className="font-semibold max-w-[150px] h-12  line-clamp-2">
                      {data.title}
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {data.author}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className=" text-yellow-500" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="text-center mt-10 cursor-pointer bg-gradient-to-r from-primary to-secondary 
                text-white py-2 px-5 rounded-lg hover:scale-105 duration-200"
              >
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
