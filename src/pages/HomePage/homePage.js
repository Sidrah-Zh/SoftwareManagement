import React from "react";
import Ellipse from "../../images/Ellipse.png";
import CustomButton from "../../components/Button/CustomButton";

function HomePage() {
  return (
    <div className="container">
      <section
        style={{
          width: "1440px",
          height: "600px",
          backgroundColor: "#295DFB1A",
        }}
        className="mx-auto flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">
            Offer the best Software <br></br>Management <br></br> Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 w-[663px] h-[140px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <CustomButton className="mt-4">Get Started</CustomButton>
          <CustomButton className="mt-4 ml-8" color="white">
            Contact Us
          </CustomButton>
        </div>
        <img
          src={Ellipse}
          alt="Your Image"
          style={{
            width: "500px",
            height: "450px",
            top: "124px",
            left: "805px",
          }}
          className="ml-8 h-auto w-80"
        />

        <div className="w-1170 h-[120px] mt-[38rem] bg-white border border-solid border-white rounded-full absolute top-699 left-120 flex justify-around items-center shadow-box">
          <div className="flex flex-col items-center">
            <div className="w-111 h-50 ml-[4rem] mr-[10rem] flex justify-center items-center text-5xl font-plus-jakarta-sans font-italic font-medium leading-none text-blue-900">
              350
            </div>
            <div className="w-22 h-50 text-blue-900  absolute top-750 mt-[1rem] left-347 flex justify-center items-center font-dm-serif-display text-4xl font-normal">
              +
            </div>
            <div className="text-xs font-plus-jakarta-sans font-normal text-blue-900 ml-[4rem] mr-[8rem]">
              Team Members
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-111 h-50 mr-[6rem] flex justify-center items-center text-5xl font-plus-jakarta-sans font-italic font-medium leading-none text-blue-900">
              350m
            </div>
            <div className="w-22 h-50 text-blue-900  ml-[3rem]  absolute top-750 mt-[1rem] left-347 flex justify-center items-center font-dm-serif-display text-4xl font-normal">
              +
            </div>
            <div className="text-xs font-plus-jakarta-sans font-normal mr-[8rem] text-blue-900">
              Total funding
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-111 h-50 ml-[4rem]  mr-[4rem] flex justify-center items-center text-5xl font-plus-jakarta-sans font-italic font-medium leading-none text-blue-900">
              500k
            </div>
            <div className="w-22 h-50 text-blue-900  absolute top-750 mt-[1rem] ml-[8rem] flex justify-center items-center font-dm-serif-display text-4xl font-normal">
              +
            </div>
            <div className="text-xs font-plus-jakarta-sans font-normal ml-[4rem]  mr-[4rem] text-blue-900">
              Total active user base
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
