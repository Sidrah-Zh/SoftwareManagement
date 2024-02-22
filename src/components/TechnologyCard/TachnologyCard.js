import CustomButton from "../Button/CustomButton";
const TechnologyCard = ({ icon, heading, heading1 }) => {
  return (
    <div className="w-[293px] h-[337px] mt-[2rem] bg-white border border-solid border-gray-200 rounded-l-md shadow-md flex flex-col justify-center items-center">
      <img src={icon} alt="Icon" className="w-20 h-20" />
      <h3 className="text-lg font-bold mt-2">{heading}</h3>
      <h3 className="text-lg font-bold mt-1">{heading1}</h3>
      <div className="mt-5">
        <CustomButton>Learn More</CustomButton>
      </div>
    </div>
  );
};

export default TechnologyCard;
