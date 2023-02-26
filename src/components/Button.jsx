import React from "react";

const Button = ({ styles }) => (
  <a  type="button" href="https://t.me/nbndevs" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    CONTACT US!
  </a>
);

export default Button;