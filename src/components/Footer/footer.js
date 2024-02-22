import React from "react";
import Footer1 from "../../images/Footer1.png";
import Footer2 from "../../images/Footer2.png";
import { FaArrowRight } from "react-icons/fa";
import Mail from "../../images/Mail.png";

const Footer = () => {
  return (
    <footer
      className="w-[1443px] h-[353px] bg-blue-950 flex justify-around items-center text-white"
      style={{ top: "5006.78px" }}
    >
      <div className="text-center">
        <h3 className="text-xl text-orange-500 font-bold mb-[2rem]">
          Logo here
        </h3>
        <ul>
          <li className="mb-[1rem]">
            Build a modern and creative <br></br> website with Lorem
          </li>
          <li>
            {" "}
            <div className="flex justify-center relative w-212 top-2 left-135">
              <img src={Footer1} alt="Icon" className="w-6 h-6 mr-2" />
              <h1 className="text-sm">+806 (000) 88 99</h1>
            </div>
          </li>
          <li>
            {" "}
            <div className=" flex justify-center relative w-212 top-6 left-135">
              <img src={Footer2} alt="Icon" className="w-6 h-6 mr-2" />
              <h1 className="text-sm">contact@info.com</h1>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-[2rem]">Pages</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blogs</li>
          <li>Portfolio</li>
          <li>Get Quotes</li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-[2rem]">Services</h3>
        <ul>
          <li>Network security</li>
          <li>Cybersecurity</li>
          <li>Help Desk</li>
          <li>Data</li>
          <li>Maintenance</li>
          <li>Accentre</li>
        </ul>
      </div>
      <div className="text-center mr-[12px]">
        <h3 className="text-xl font-bold mb-[2rem]">Our NewsLetter</h3>
        <ul>
          <div className="relative w-[330px] h-[60px] top-5158.55 left-975 rounded-full bg-white flex items-center px-6">
            <input
              type="text"
              className="w-full ml-[25px]  h-full bg-transparent outline-none placeholder-gray-400"
              placeholder="Send Us email"
            />
            <img
              src={Mail}
              alt="Icon"
              className="absolute w-[18px] h-[16px] top-5182.55 left-1000"
            />

            <FaArrowRight className="ml-3 w-9 h-6 text-red bg-orange-400 rounded-full p-1" />
          </div>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
