import React from "react";
import Client from "../../images/client.png";
import ContactUsCard from "../../components/Card/contactCard";

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-[40rem]">
      <div className="flex justify-center items-center">
        <img
          src={Client}
          alt="Icon"
          className="w-16 h-16 mt-[4rem] "
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-[4rem]">
          Word From Our Client
        </h1>
      </div>
      <div className="flex justify-center items-center mt-3">
        <h2 className="text-xl font-semibold text-gray-700">
          5 Stars Based on 4,700+ Real Users Reviews
        </h2>
      </div>
      <div className="flex justify-around items-center mt-10">
        <ContactUsCard />
        <ContactUsCard />
        <ContactUsCard />
      </div>
    </div>
  );
};

export default ContactUsPage;
