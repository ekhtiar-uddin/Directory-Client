import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import brandOne from "/public/assets/footer-card-1.png";
import brandTwo from "/public/assets/footer-card-2.png";
import brandThree from "/public/assets/footer-card-3.png";
import brandFour from "/public/assets/footer-card-4.png";
import brandFive from "/public/assets/footer-card-5.png";
import logoWhite from "/public/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-14 lg:py-20  md:h-[130vh] lg:h-[95vh] 2xl:h-[60vh] flex items-center justify-center  font-Inter ">
      <section>
        <div className="customWidth flex lg:gap-12 xl:gap-32  2xl:gap-16 lg:flex-row   flex-col-reverse  gap-14">
          <div className="flex justify-center">
            <div>
              <div className="flex items-center gap-2 mb-6 xl:mb-10">
                <img className="w-[50px] lg:w-[50px]" src={logoWhite}></img>
                <div>
                  <h2 className="text-xl   font-bold font-Inter">
                    Companies Directory
                  </h2>
                  <p className="text-[12px] -mt-1 ">Business Hub</p>
                </div>
              </div>

              <h2 className="font-Inter font-bold mb-2 ">Connect us on</h2>
              <ul className="flex gap-8 ">
                <a href="https:/facebook.com">
                  {" "}
                  <FaFacebook className="text-3xl"></FaFacebook>{" "}
                </a>
                <a href="https:/instagram.com">
                  {" "}
                  <FaInstagramSquare className="text-3xl"></FaInstagramSquare>{" "}
                </a>
                <a href="https:/twitter.com">
                  {" "}
                  <FaTwitterSquare className="text-3xl"></FaTwitterSquare>{" "}
                </a>
                <a href="https:/linkedin.com">
                  {" "}
                  <FaLinkedin className="text-3xl"></FaLinkedin>{" "}
                </a>
                <a href="https:/youtube.com">
                  {" "}
                  <FaYoutube className="text-3xl"></FaYoutube>{" "}
                </a>
              </ul>
              <ul className="flex flex-col gap-1 mt-7 ">
                <p className=" flex items-center gap-2   ">
                  <Phone className="w-[16px]" />{" "}
                  <span className="text-footerGray">+1 (555) 123-4567</span>
                </p>
                <p className=" 3xs:flex items-center gap-2 hidden ">
                  <Mail className="w-[16px]" />{" "}
                  <span className="text-footerGray">info@companiesdir.com</span>
                </p>
                <p className=" 3xs:flex items-center gap-2 hidden ">
                  <MapPin className="w-[16px]" />{" "}
                  <span className="text-footerGray">
                    123 Business St, New York, USA
                  </span>
                </p>
              </ul>
            </div>
          </div>
          {/* RIGHT SIDE FOR SMALL DEVICE  */}
          <section className="flex  2xl:flex-row 2xl:gap-0 gap-10  flex-col-reverse flex-1  2xl:justify-between  ">
            <div
              className="flex   
            justify-between   2xl:w-[400px] w-full sm:gap-0 gap-10"
            >
              <div className=" w-[240px] sm:w-auto">
                <h2 className="font-bold mb-3 ">About Us</h2>
                <ul className="text-footerGray space-y-2">
                  <li className="">About Us</li>
                  <li className="">Our Story</li>
                  <li className="">Contact Us</li>
                  <li className="">Privacy Policy</li>
                  <li className="">Terms of Service</li>
                  <li className="">How It Works</li>
                  <li className="">FAQ</li>
                </ul>
              </div>

              <div className="2xl:w-auto sm:w-[400px] w-full ">
                <h2 className="font-bold mb-3 ">Customer Service</h2>
                <ul className="text-footerGray space-y-2">
                  <li className="">Help Center</li>
                  <li className="">Submit Company</li>
                  <li className="">Verification</li>
                  <li className="">Partnership</li>
                  <li className="">Live Chat</li>
                  <li className="">Business Resources</li>
                  <li className="">API Access</li>
                  <li className="">Support Portal</li>
                </ul>
              </div>
            </div>
            <div className="flex  justify-between 2sm:gap-32 gap-8   ">
              <div className=" w-[240px] sm:w-auto">
                <h2 className="font-bold mb-3 ">Popular Categories</h2>
                <ul className="text-footerGray space-y-2">
                  <li className="">Technology</li>
                  <li className="">Finance</li>
                  <li className="">Healthcare</li>
                  <li className="">Education</li>
                  <li className="">Retail</li>
                  <li className="">All Industries</li>
                </ul>
              </div>

              <div className=" 2xl:w-[400px]  w-[400px] ">
                <h2 className="font-bold text-xl">Subscribe</h2>
                <p className="my-4 text-footerGray">
                  Stay informed about new companies, exclusive updates <br />{" "}
                  and exciting opportunities.
                </p>
                <div>
                  <input
                    className="border-2 focus:border-p1 outline-none text-d2 bg-white py-2.5 pl-3  w-full  rounded-full"
                    placeholder="Enter email address"
                    type="email"
                    name=""
                    id=""
                  />

                  <button
                    className="cursor-pointer hover:bg-p1 hover:text-white bg-white text-p1 w-full py-2.5 
            transition-allfont-Inter font-semibold duration-300  rounded-full mt-3 flex items-center gap-2 justify-center"
                  >
                    Subscribe <FaArrowRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* copyright */}

        <div className="flex items-center justify-between mt-16 border-t border-[#444] pt-7 customWidth md:flex-row flex-col-reverse lg:gap-0 gap-7">
          <div>
            <p className="text-footerGray text-center text-sm">
              Copyright © 2025 Companies Directory, Inc. All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-3 ">
            <img src={brandOne} alt="" />
            <img src={brandTwo} alt="" />
            <img src={brandThree} alt="" />
            <img src={brandFour} alt="" />
            <img src={brandFive} alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
