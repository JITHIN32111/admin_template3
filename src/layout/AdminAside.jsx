import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import "../App.css";
import { PiUsersFourFill } from "react-icons/pi";
import { MdAutoAwesomeMotion } from "react-icons/md";
import clossingIcon from '../assets/clossingIcon.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import img2 from '../assets/Vector.png'
import { BsBagPlusFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
const AdminAside = ({ open, setOpen }) => {
  const location = useLocation();
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  const Menus = [
    { title: "Overview", path: "/admin", icon: <MdSpaceDashboard /> },
    { title: "User", path: "/admin/users", icon: <FaUser /> },
    { title: "Packages", path: "/admin/packages", icon: <PiBagFill /> },
    { title: "Add Package", path: "/admin/add-package", icon: <BsBagPlusFill /> },
    { title: "Report", path: "/admin/reports", icon: <BiSolidReport /> },
    { title: "Notification", path: "/admin/notifications", icon: <IoIosNotifications /> },
    { title: "Settings", path: "/admin/settings", icon: <IoSettings /> },
  ];

  const AdminMenus = [
    { title: "All Members", path: "/admin/all-members", icon: <PiUsersFourFill /> },
    { title: "Rejoining Balance", path: "/admin/rejoining-balance", icon: <FaWallet /> },
    { title: "Auto Pool", path: "/admin/auto-pool", icon: <MdAutoAwesomeMotion /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <div className={`z-50 relative ${window.innerWidth >= 768 ? "static" : ""}`}>
      <div
        className={`z-50  sidebar ${open ? "sidebar-open  shadow-xl" : "sidebar-closed w-24 "
          } bg-[#022213] text-white h-screen py-5 px-3  pt-12  z-50  ${window.innerWidth < 768 ? "fixed top-0 p-6 " : ""
          }`}
      >
        <img src={clossingIcon} alt="" className={`absolute cursor-pointer left-0 top-20 mt-40 w-2 h-12 text-white shadow-2xl
  rounded-full ${!open && "rotate-3"}
  transition-transform duration-300`}
          onClick={() => setOpen(!open)} />


        <div className="flex gap-x-4 items-center">
          {/* <div className='flex flex-row justify-center items-center text-2xl xs:text-3xl font-bold text-black mb-10 sm:mb-12'>
                    <span>Logo</span>
                    <img src={img2} className='xs:w-auto w-10' alt="Company logo" aria-label="Company logo" />
                    <span>Ipsum</span>
                </div> */}
          <div className={`flex justify-center items-center  tex-xl sm:text-2xl pl-4 sm:pl-0 md:pl-5 font-bold -mb-6 md:-mb-0`}>
            <span className={`${!open ? 'hidden ' : ''}`}>Logo</span>
            <img src={img2} className=' w-10' alt="Company logo" aria-label="Company logo" />
            <span className={`${!open ? 'hidden ' : ''}`}>Ipsum</span>
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
            
            key={index}
            className={`flex rounded-md p-2 pl-4 font-normal cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} 
            ${location.pathname === Menu.path ? "text-[#72A10F]" : "text-white"}`}
            onClick={handleMenuClick}
          >
            <Link to={Menu.path} className="flex items-center gap-x-4 mt-3 ">
              <span className={`${!open ? 'pl-3 text-2xl' : 'text-xl'}`}>
                {Menu.icon}
              </span>
              <span className={`${!open && "hidden"} text-base origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
          
          ))}


        </ul>
      <span className="flex flex-row gap-x-2 items-center justify-center pt-28  cursor-pointer hover:scale-95 transition duration-300">
        <IoLogOut/>
        logout
      </span>
        {/* Admin Section */}
        {/* <h2 className={`${!open && "hidden"} origin-left duration-200 text-gray-600 font-semibold bg-gray-200 py-1 px-2 rounded-md mt-3 ml-1`}>Admin</h2>
        <ul className="pt-2">
          {AdminMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${location.pathname === Menu.path && "bg-slate-300"}`}
              onClick={handleMenuClick}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4">
                <span className="text-xl">{Menu.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AdminAside;
