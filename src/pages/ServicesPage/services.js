import React from "react";
import BackIcon from "../../images/BackIcon.png";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import Services1 from "../../images/Services1.png";
import Services2 from "../../images/Services2.png";
import CustomButton from "../../components/Button/CustomButton";

function ServicesPage() {
  const images = [image1, image2, image3, image4, image5];

  const headings = [
    "AI Data Analysis",
    "Machine Learning",
    "Data Visualization",
    "Business Intelligence",
    "Artificial Intelligence",
    "Web Development",
  ];

  const paragraphs = [
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
    "Lorem Ipsum is simply dummy text of the printing",
  ];

  return (
    <div className="container mx-auto mt-24">
      <div className="w-1170 h-872 border border-solid border-gray-200 rounded-lg p-6">
        <h2 className="text-4xl font-semibold text-center mb-2 text-blue-900">
          Explore Our Services
        </h2>
        <p className="text-lg font-medium text-center mb-9 text-gray-700 py-2">
          More than 15,000 companies trust and choose us
        </p>
        <div className="flex flex-wrap -mx-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-1/3 px-4 rou mb-6 ">
              <div className="card p-4 border border-solid border-gray-200 rounded-3xl ">
                <img
                  src={images[index % images.length]}
                  alt={`Small Image ${index}`}
                  className="w-12 h-12 mb-4 ml-3 mt-2"
                />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">
                    {headings[index % headings.length]}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 ml-3">
                  {paragraphs[index % paragraphs.length]}
                </p>
                <img
                  src={BackIcon}
                  alt={`Small Image ${index}`}
                  className="w-12 h-12 mb-4 mt-[8px] ml-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-container mx-auto mt-10 flex justify-center">
        <div className="image-div w-[450px] h-[400px] float-left mr-[5rem]">
          <img src={Services2} alt="Service Image" className="w-full h-full" />
        </div>
        <div className=" w-[500px] h-[450px] float-left ml-[2rem] p-6">
          <div className="small-heading text-blue-700 text-sm font-bold mb-4">
            OVER 150K+ CLIENT
          </div>
          <div className="big-heading text-gray-700 mb-8">
            Excepteur sint occaecat cupidatat officia non proident <br></br>{" "}
            sunt in culpa qui deserunt.!
          </div>
          <div className="line flex items-center mb-4">
            <img src={Services1} alt="Logo 1" className="logo mr-4" />
            <div className="line-text text-blue-900">Content with image 1</div>
          </div>
          <div className="line flex items-center mb-4">
            <img src={Services1} alt="Logo 2" className="logo mr-4" />
            <div className="line-text text-blue-900">Content with image 2</div>
          </div>
          <div className="line flex items-center mb-8">
            <img src={Services1} alt="Logo 3" className="logo mr-4" />
            <div className="line-text text-blue-900">Content with image 3</div>
          </div>
          <CustomButton>About Us</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
