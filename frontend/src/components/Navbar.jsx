import { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const MenuItem = ({ setSideBar }) => {

  const handleSnackBar = () => {
    enqueueSnackbar("This route is not working", {
      variant: "warning",
    });
  };

  return (
    <>
      {/* Home */}
      <Link
        // to={"/"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={handleSnackBar}
      >
        Home
      </Link>

      {/* Services Link */}
      <Link
        // to={"/services"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={handleSnackBar}
      >
        Services
      </Link>

      {/* Blog Link  */}
      <Link
        to={"/"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={() => setSideBar(false)}
      >
        Blog
      </Link>

      {/* Contact Link */}
      <Link
        // to={"/contact"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={handleSnackBar}
      >
        Contact
      </Link>

      {/* About Link */}
      <Link
        //   to={"/about"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={handleSnackBar}
      >
        About
      </Link>

      {/* Login / SignUp */}
      <Link
        to={"/signup"}
        className="hover:bg-teal-500 rounded-md py-1 px-3"
        onClick={() => setSideBar(false)}
      >
        SignUp
      </Link>
    </>
  );
};

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div>
      <div className="w-full h-[8vh] md:h-[10vh] flex items-center justify-between px-3 md:py-4 bg-[#232323] sm:bg-black fixed top-0 left-0">
      {/* logo? */}
      <div>
        <img
          className="w-[60px] md:w-[70px] lg:w-[90px]"
          src={logo}
          alt="logo"
        />
      </div>

      {/* SideBar three line div  */}
      <div
        className="mr-2 md:hidden cursor-pointer"
        onClick={() => setSideBar(!sideBar)}
      >
        {sideBar ? <RxCross2 size={30} /> : <IoReorderThreeOutline size={35} />}
      </div>

      {/* Conditional rendering of sidebar */}
      {sideBar ? (
        <div
        className="sidebar h-[90vh] bg-[#232323] w-[60vw] sm:w-[45vw] z-30 flex flex-col gap-10 md:hidden absolute top-[9vh] sm:top-[8vh] right-[10px] sm:right-3 pt-10 px-2 sm:pt-12 sm:px-6 rounded-lg">
          {/* Home Link  */}
          <MenuItem setSideBar={setSideBar} />
        </div>
      ) : (
        <></>
      )}

      {/* Icons for Navbar */}
      <div className="py-4 md:flex justiy-between lg:gap-8 hidden">
        <MenuItem setSideBar={setSideBar} />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
