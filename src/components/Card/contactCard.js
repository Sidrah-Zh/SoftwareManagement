import React, { useState } from "react";
import Card1 from "../../images/card1.png";

const ContactUsCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-[${isHovered ? "581.33px" : "119.25px"}] h-[390px] rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl bg-gradient-to-b from-blue-300 to-purple-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ marginLeft: isHovered ? "-2rem" : "0", marginRight: isHovered ? "-2rem" : "0" }}
    >
      <div className="p-6 flex items-center">
        <div className="w-[">
          {!isHovered && (
            <>
              <h1 className="text-2xl font-semibold text-white">.02</h1>
              <div className="mt-[2rem] text-white">Founder of Dulalix</div>
            </>
          )}
          {isHovered && (
            <>
              <h1 className="text-2xl font-semibold text-white">.02</h1>
              <div className="flex items-center">
                <div className="mt-[2rem]">
                  <span className="text-yellow-400">&#9733;</span>
                  <span className="text-yellow-400">&#9733;</span>
                  <span className="text-yellow-400">&#9733;</span>
                  <span className="text-yellow-400">&#9733;</span>
                  <span className="text-yellow-400">&#9733;</span>
                </div>
              </div>
              <p className="text-white">
                Is it possible to Love your credit card processor? with
                Softec, yes!
              </p>
              <div className="flex items-center">
                <span className="text-white font-bold mr-2 mt-[2rem]">
                  John Doe
                </span>
              </div>
              <span className="text-white mt-[2rem]">Founder & Leader</span>
            </>
          )}
        </div>
        {isHovered && (
          <div><img
          src={Card1}
          alt="Avatar"
          className="absolute top-0 right-0 h-full rounded-l"
        /></div>
        )}
      </div>
    </div>
  );
};

export default ContactUsCard;
