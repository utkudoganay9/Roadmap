import React from "react";
import "../components/css/Footer.css";

function Footer() {
 

  return (
    <footer className=" w-auto right-0">
      <div className="flex justify-end">
      <img src={process.env.PUBLIC_URL + '/img/'} alt="logo" className="w-auto h-50" />
        </div>
        <div className="text-left text-gray-800"style={{ marginTop: "-38px" }}><p>Copyright &copy; 2023 </p>Version 3.6</div>
    </footer>
  );
}

export default Footer;
