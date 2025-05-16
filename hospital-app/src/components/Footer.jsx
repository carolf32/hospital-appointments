import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left section */}
        <div>
          <h1 className="mb-5 w-40 font-bold text-[var(--color-primary)] text-2xl">
            Hospital App
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <li>Private Policy</li>
          </ul>
        </div>
        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+123 456 789</li>
            <li>mail@mail.com</li>
          </ul>
        </div>
      </div>
      {/* Bottom section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
