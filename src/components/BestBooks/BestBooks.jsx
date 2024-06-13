/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/books/bookbest1.jpg";
import Img2 from "../../assets/books/bookbest2.jpg";
import Img3 from "../../assets/books/bookbest3.jpg";

const BooksData = [
  {
    id: 1,
    img: Img1,
    title: "Harry Potter",
    description:
      "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's conflict with Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles (non-magical people).",
  },
  {
    id: 2,
    img: Img2,
    title: "Lam Di",
    description:
      "Lam Di is a novel by Vietnamese writer Vu Trong Phung, written in 1936 and published in 1937. This is considered the first Vietnamese novel to address the issue of prostitution.",
  },
  {
    id: 3,
    img: Img3,
    title: "Doraemon",
    description:
      "Doraemon (ドラえもん) is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was first serialized in December 1969. Its chapters were collected in 45 tankōbon volumes published by Shogakukan from 1974 to 1996. The story revolves around an earless robotic cat named Doraemon, who travels back in time from the 22nd century to aid a boy named Nobita Nobi.",
  },
];
const BestBooks = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header selection */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary
                    "
            >
              Trending Books
            </p>
            <h1 className="text-3xl font-bold ">Best Book</h1>
            <p className="text-xs text-gray-400">
              Collection of quality books with the most readers, giving readers
              different emotions in each book.
            </p>
          </div>

          {/* card selection */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center  ">
            {BooksData.map((book) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary
                        hover:text-white relative shadow-xl duration-300 group max-w-[300px] "
              >
                <div className="h-[100px] ">
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-110 duration-300
                                shadow-md rounded-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p className="text-gray-400 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {book.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className=" bg-primary text-white px-4 py-2 rounded-lg mt-4
                                hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary hover:shadow-lg"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
