import React from "react";
import Portfolioimg1 from "../../images/Portfolioimg1.png";
import Portfolioimg2 from "../../images/Portfolioimg2.png";
import Portfolioimg3 from "../../images/Portfolioimg3.png";
import { FaArrowRight } from "react-icons/fa6";
import Technology from "../../images/technology.png";
import TechnologyCard from "../../components/TechnologyCard/TachnologyCard";
import Technology1 from "../../images/technologie1.png";
import Technology2 from "../../images/technologie2.png";
import Technology3 from "../../images/technology3.png";
import Technology4 from "../../images/technologie4.png";
const PortfolioPage = () => {
  return (
    <div>
      <div className="bg-blue-50 min-h-screen">
        <div className="w-1473 h-870 mx-auto relative mt-[2rem] left-11">
          <div className="flex justify-center items-center">
            <img
              src={Portfolioimg1}
              alt="Logo"
              className="w--[56px] h-[50px] mr-2 mt-[3rem] "
            />
            <h1 className="text-5xl font-bold font-plus-jakarta-sans mt-[3rem]">
              Check Some Of Our Recent Work
            </h1>
          </div>
          <h2 className="text-center text-xl font-semibold font-plus-jakarta-sans mt-4">
            More than 15,000 companies trust and choose US
          </h2>

          <div className="flex mt-12">
            <div className="w-[600px] h-[350px] bg-gray-100 rounded-l-30 shadow-md mr-[2rem] mb-4 overflow-hidden flex">
              <img src={Portfolioimg2} alt="Card 1" className="w-1/2 h-auto" />
              <div className="p-4 w-1/1">
                <h3 className="font-semibold text-lg mb-2 mt-[2rem]">
                  Web Development
                </h3>
                <p className="text-sm text-gray-700 mb-2 h-[72px] w-[190px]">
                  Excepteur sint occaecat cupidatat officia non proident, sunt
                  in culpa qui deserunt mollit anim id est laborum.
                </p>
                <div className="flex justify-between items-center mt-[3rem]">
                  <div className="flex flex-col">
                    <div className="text-gray-400 text-sm">Client Name</div>
                    <div className="text-sm">Phillip Anthropy</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-400 text-sm ml-[20px]">
                      Budget
                    </div>
                    <div className="text-sm ml-[20px]">$200-250k</div>
                  </div>
                  <FaArrowRight className="bg-orange-500 ml-[20px] text-white rounded-full w-[25px] h-[25px]"></FaArrowRight>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[350px]   bg-gray-100 rounded-l-30 shadow-md mb-4 overflow-hidden flex">
              <img src={Portfolioimg3} alt="Card 2" className="w-1/2 h-auto" />
              <div className="p-4 w-1/1">
                <h3 className="font-semibold text-lg mb-2 ">3d Design</h3>
                <p className="text-sm text-gray-700 mb-2 h-[72px] w-[190px]">
                  Excepteur sint occaecat cupidatat officia non proident, sunt
                  in culpa qui deserunt mollit anim id est laborum.
                </p>
                <div className="flex justify-between items-center mt-[3rem] ">
                  <div className="flex flex-col">
                    <div className="text-gray-400 text-sm">Client Name</div>
                    <div className="text-sm">Phillip Anthropy</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-400 text-sm ml-[20px]">
                      Budget
                    </div>
                    <div className="text-sm ml-[20px]">$200-250k</div>
                  </div>
                  <FaArrowRight className="bg-orange-500 text-white rounded-full w-[25px] h-[25px] ml-[20px]"></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1170px] h-[526px] border border-solid border-gray-200 absolute top-[2600px] left-[100px]">
        <div className="flex justify-center items-center">
          <img
            src={Technology}
            alt="Logo"
            className="w-[56px] h-[50px] mr-2 mt-[3rem] "
          />
          <h1 className="text-5xl font-bold font-plus-jakarta-sans mt-[3rem]">
            Technologies We Use
          </h1>
        </div>
        <h2 className="text-center text-xl font-semibold font-plus-jakarta-sans mt-4">
          Lorem ipsum dolor sit amet,
        </h2>
        <div className="flex justify-between mt-4">
          <TechnologyCard
            icon={Technology1}
            heading="Hubspot"
            heading1="Contacts Sync"
          />
          <TechnologyCard
            icon={Technology2}
            heading="Mailchimp"
            heading1="Contacts Sync"
          />
          <TechnologyCard
            icon={Technology3}
            heading="Salesforce"
            heading1="Contacts Sync"
          />
          <TechnologyCard
            icon={Technology4}
            heading="Zendesk"
            heading1="Integration"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
