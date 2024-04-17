import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";

const Dashboard = () => {
  const cardsData = [
    { title: 'Card 1', content: 'Card 1' },

  ];

  return (
    <div className="dashboard">
      <h1 className="text-4xl font-bold mb-6 ml-60 mt-20">Kullanıcı Paneli</h1>
      <div className="flex flex-wrap gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className="max-w-sm bg-white p-6 rounded-md shadow-md ml-60">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Kullanıcı</h2>
              <div className="flex items-center">
  <PiStudentFill className="text-gray-700 inline-block mr-2" />
  <p className="text-gray-700">eğitimdurumu</p>
</div>
              <div className="flex items-center">
  <FaPhone className="text-gray-700 inline-block mr-2" />
  <p className="text-gray-700">eğitimdurumu</p>
</div>
<div className="flex items-center">
  <IoMail className="text-gray-700 inline-block mr-2" />
  <p className="text-gray-700">eğitimdurumu</p>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
