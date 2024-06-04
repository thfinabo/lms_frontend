import { RiDashboardLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { PiWarningOctagon } from "react-icons/pi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("Overview");
  const navigate = useNavigate();

  const handleLogOut = () =>{
    Cookies.remove('authToken');
    toast.success("User successfully logged out");
    navigate('/login')
  }


  const navLinks = [
    {
      icon: <RiDashboardLine fontSize={"1.6rem"} />,
      title: "Overview",
    },
    {
      icon: <IoBookOutline fontSize={"1.6rem"} />,
      title: "Courses",
    },
    {
      icon: <LiaClipboardListSolid fontSize={"1.6rem"} />,
      title: "All Courses",
    },
    {
      icon: <FiUser fontSize={"1.6rem"} />,
      title: "User",
    },
    {
      icon: <PiWarningOctagon fontSize={"1.6rem"} />,
      title: "Help",
    },
  ];

  const handleClick = (title) => {
    if (title) {
      setActiveLink(title);
    } else {
      setActiveLink("Overview");
    }
  };
  return (
    <div className="bg-navBlue h-[100vh] w-[250px] text-white pt-8">
      <p className="text-[32px] border-b-2 px-4 py-4 pb-8">LOGO</p>
      <div className="px-4 py-6">
        {navLinks?.map(({ icon, title }) => (
          <p
            className={`flex items-center p-3 my-2 cursor-pointer ${
              activeLink === title
                ? "text-red-500 bg-white rounded-md"
                : "text-white"
            }`}
            onClick={() => handleClick(title)}
            key={title}
          >
            {icon} <span className="pl-3">{title}</span>
          </p>
        ))}
        <p className={`flex items-center absolute bottom-[20px] p-3 my-2 w-[80%] cursor-pointer ${
              activeLink === "Log out"
                ? "text-red-500 bg-white rounded-md"
                : "text-white"
            }`} onClick={()=>{handleClick("Log out"); handleLogOut()}}>
          <FiUser fontSize={"1.6rem"} /> <span className="pl-3">Log out</span>
        </p>
      </div>
    </div>
  );
};

export default SideBar;
