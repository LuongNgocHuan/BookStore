/* eslint-disable react/jsx-key */
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// import footerLogo from "../../assets/website"

const FooterLinks =[
    {
        title: "Home",
        Link: "/#",
    },
    {
        title: "About",
        Link: "/#about",
    },
    {
        title: "Contact",
        Link: "/#contact",
    },
    {
        title: "Blog",
        Link: "/#blog",
    },
    
]

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 ">
            {/* company details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 ">
                Books Store
              </h1>
              <p className="">
                Book testimonials highlight readers experiences, praising
                compelling narratives, insightful content, and the
                transformative impact of the author work.
              </p>
              <br />
              {/* social links */}
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Hoang Mai, Ha Noi</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+84 978074620</p>
              </div>
              <div className="flex items-center gap-3 mt-6 ">
                <a href="">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Links section  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2  md:pl-10 ">
                <div>
                    <div className="py-8 px-4 ">
                        <h1 className="text-xl font-bold sm:text-left text-justify mb-3" 
                        >Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks.map((data) => (
                                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary
                                    space-x-1 text-gray-500">
                                        <span>➯</span>
                                        <span className="">{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4 ">
                        <h1 className="text-xl font-bold sm:text-left text-justify mb-3" 
                        >Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks.map((data) => (
                                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary
                                    space-x-1 text-gray-500">
                                        <span>➯</span>
                                        <span className="">{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div><div>
                    <div className="py-8 px-4 ">
                        <h1 className="text-xl font-bold sm:text-left text-justify mb-3" 
                        >Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            {
                                FooterLinks.map((data) => (
                                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary
                                    space-x-1 text-gray-500">
                                        <span>➯</span>
                                        <span className="">{data.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
          </div>
          {/* coppy-right-selection  */}
          <div className="">
            <div className="border-t-2 border-gray-300/50">
                <p className="text-center py-10">
                    Copyright &copy; 2024. All rights reserved || Made by LNH
                </p>
            </div>
                            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
