/* eslint-disable react/jsx-key */
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Harry Potter captivates with its magical world, compelling characters, and intricate plot, making it an unforgettable literary adventure.",
    img: "https://cdn.vox-cdn.com/thumbor/Iev8pfEDnohdwa93NcRAFCUwq70=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20042038/lovevictor_103_101119_09864r2_2.jpg",
  },
  {
    id: 2,
    name: "Benji",
    text: "Call Me by Your Name is a beautifully written novel, capturing intense emotions, profound love, and unforgettable moments with lyrical prose.",
    img: "https://i.pinimg.com/originals/f8/25/73/f8257306ec0383cf7aa15c9733be65af.jpg",
  },
  {
    id: 3,
    name: "Carlos",
    text: "Red, White & Royal Blue is an enchanting romantic comedy with vibrant characters, heartfelt moments, and an irresistibly charming storyline.",
    img: "https://images.hellomagazine.com/horizon/square/a1c76d8adedc-carlos-lonestar-t.jpg",
  },
];

const Testimonial = () => {
  // slider-config
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidetoshow
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pb-10">
        <div className="container py-10">
          {/* header */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customer says
            </p>
            <h1 className="text-3xl font-bold ">Testimonials</h1>
            <p className="text-xs text-gray-400">
              Book testimonials highlight readers experiences, praising
              compelling narratives, insightful content, and the transformative
              impact of the author work.
            </p>
          </div>

          {/* cart selection  */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <div className="">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-2xl w-20 h-20 object-cover"
                      />
                    </div>

                    <div className="">
                      <div className="">
                        <p className="text-gray-500 text-sm">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-white">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className=" absolute z-10 text-black/20 top-0 right-0 font-serif text-9xl">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
