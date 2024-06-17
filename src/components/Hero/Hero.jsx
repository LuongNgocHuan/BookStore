/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/pattern1.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Ruyi's Royal Love in the Palace",
    description:
      "Ruyi's Royal Love in the Palace (simplified Chinese: 如懿传; traditional Chinese: 如懿傳; pinyin: Rúyì Zhuàn; lit. 'The Legend of Ruyi') is a 2018 Chinese television series based on the novel Hougong Ruyi Zhuan by Liu Lianzi. Starring Zhou Xun and Wallace Huo, the series chronicles both the romantic and marital relationship between the Qianlong Emperor and Empress Nara.",
  },
  {
    id: 2,
    img: Book2,
    title: "Call Me by Your Name",
    description:
      "Call Me by Your Name is a 2007 coming-of-age novel by American writer André Aciman that centers on a blossoming romantic relationship between an intellectually precocious, curious, and pretentious 17-year-old Italian Jewish boy of American origin Elio Perlman and a visiting 24-year-old American Jewish scholar named Oliver in 1980s Italy. The novel chronicles their summer romance and the 20 years that follow. A sequel to the novel, Find Me, was released in October 2019.",
  },
  {
    id: 3,
    img: Book3,
    title: "Twilight (Meyer novel)",
    description:
      "Twilight (stylized as twilight) is a 2005 young adult vampire-romance novel by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella Bella Swan, who moves from Phoenix, Arizona, to Forks, Washington.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  // const [imageId, setImageId] = useState(Book1);
  // const [title, setTitle] = useState();
  // const [description, setDescription] = useState();

  const defaultBook = ImageList.find((book) => book.id === 1);
  const [imageId, setImageId] = useState(defaultBook.img);
  const [title, setTitle] = useState(defaultBook.title);
  const [description, setDescription] = useState(defaultBook.description);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center 
        dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text-content-section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm
                            to-secondary mr-4"
                >
                  by LNH
                </p>
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div className="">
                <button
                  onClick={handleOrderPopup}
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg
                            mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>

            {/* image-section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] overflow-hidden justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>

              {/* other-image-list */}
              <div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4
                        absolute -bottom-[40px] lg:-right-1 bg-transparent rounded-full"
              >
                {ImageList.map((data) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={data.img}
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 "
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                      );
                      setTitle(data.title);
                      setDescription(data.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
