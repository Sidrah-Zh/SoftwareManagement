import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./images/logo.png";
import CustomButton from "./components/Button/CustomButton";
import HomePage from "../src/pages/HomePage/homePage";
import "./App.css";
import ServicesPage from "./pages/ServicesPage/services";
import PortfolioPage from "./pages/PortFolioPage/portfolioPage";
import ContactUsPage from "./pages/ContactUsPage/contactUs";
import Footer from "./components/Footer/footer";

function App() {
  return (
    
    <div>
      <header className="header">
        <div className="ml-20 flex items-center">
          <img src={logo} alt="Logo" className="h-100 w-120" />
          <div className="flex gap-4 ml-[6rem]">
            <a
              href="/"
              className="text-base font-urbanist font-medium text-blue-900 px-3 py-4 rounded-lg"
            >
              Home
            </a>
            <a
              href="/"
              className="text-base font-urbanist font-medium text-blue-900 px-3 py-4 rounded-lg"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-base font-urbanist font-medium text-blue-900 px-3 py-4 rounded-lg"
            >
              Services
            </a>
            <a
              href="/"
              className="text-base font-urbanist font-medium text-blue-900 px-3 py-4 rounded-lg"
            >
              Portfolio
            </a>
            <a
              href="/"
              className="text-base font-urbanist font-medium text-blue-900 px-3 py-4 rounded-lg"
            >
              Contact Us
            </a>
          </div>
          <div className="ml-[11rem] flex items-center">
            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      </header>
      <HomePage />
      <ServicesPage />
      <PortfolioPage />
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default App;
