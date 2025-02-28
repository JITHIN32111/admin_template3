import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { LuUserSquare } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { HiUsers } from "react-icons/hi2";
import { IoWallet } from "react-icons/io5";
import { TbSquareArrowUpFilled } from "react-icons/tb";
import Chart from "./Charts";
import Aos from "aos";
import "aos/dist/aos.css";
const Dashboard = () => {
  // Set the first box as the default selected (index 0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  const data = [
    {
      title: "Total user",
      count: 200,
      change: "10%",
      description: "User numbers increased by 10% last month.",
      icon: <FaUsers size={24} />,
    },
    {
      title: "Total Amount",
      count: "₹200000/-",
      change: "10%",
      description: "Total profit increased by 20%.",
      icon: <IoWallet size={24} />,
    },
    {
      title: "Pending User",
      count: 200000,
      change: "10%",
      description: "10% of users are pending.",
      icon: <HiUsers size={24} />,
    },
    {
      title: "Total Package",
      count: 200000,
      change: "10%",
      description: "Total packages increased by 10%.",
      icon: <SlHandbag size={24} />,
    },
    {
      title: "Total Admin",
      count: 300000,
      change: "10%",
      description: "The total number of admins increased by 10%.",
      icon: <LuUserSquare size={24} />,
    },
    {
      title: "Blocked User",
      count: 5000,
      change: "10%",
      description: "10% of users are blocked.",
      icon: <RiUserForbidFill size={24} />,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div

            key={index}
            className={`p-7  rounded-3xl shadow-md border border-gray-300 flex flex-col justify-between cursor-pointer transition duration-300
            ${selectedIndex === index
                ? "bg-gradient-to-r from-[#022213] to-[#08884C] text-white"
                : "bg-white text-black"
              }`}
            onClick={() => setSelectedIndex(index)} // Set the selected index
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{item.icon}</div>
              <div
                className={`flex items-center text-xs px-4 py-1 rounded-3xl xl:hidden
  ${selectedIndex === index
                    ? "bg-[#72A10F] text-white"
                    : "bg-[#AAF49B] text-black"
                  }`}
              >
                {/* Apply conditional class to the icon */}
                <TbSquareArrowUpFilled size={20}
                  className={`mr-2 ${selectedIndex === index ? "text-white" : "text-black"
                    }`}
                />
                {item.change}
              </div>
            </div>

            
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="flex flex-row gap-x-2">
              <p className="text-4xl font-bold">{item.count}</p>

              <div
                className={` items-center text-xs px-4 py-1 rounded-3xl hidden xl:flex
  ${selectedIndex === index
                    ? "bg-[#72A10F] text-white"
                    : "bg-[#AAF49B] text-black"
                  }`}
              >
                {/* Apply conditional class to the icon */}
                <TbSquareArrowUpFilled size={20}
                  className={`mr-2 ${selectedIndex === index ? "text-white" : "text-black"
                    }`}
                />
                {item.change}
              </div>

            </div>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      <Chart/>

    </div>
  );
};

export default Dashboard;
