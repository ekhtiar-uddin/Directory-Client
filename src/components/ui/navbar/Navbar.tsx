import { Button } from "@/components/reusable/button";
import {
  selectGlobalParams,
  setGlobalParams,
} from "@/redux/features/auth/globalSlice";
import { Mail, Menu, Phone, Search, SearchCheck, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const globalParams = useAppSelector(selectGlobalParams);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 150); // 150ms delay
    setHideTimeout(timeout);
  };

  const navLinks = (
    <ul className="xl:flex gap-4 xl:mt-4  xl:space-y-0 space-y-3 ">
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          Home
        </NavLink>
      </li>

      <li className="relative xl:block hidden   ">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer "
        >
          <NavLink to="/" className="pb-6 rounded-b-none inActiveNav ">
            Featured
          </NavLink>
        </div>
      </li>

      <li className="">
        <NavLink
          to="/all-companies"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          All Companies
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          About
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "   activeNav  " : "inActiveNav "
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(document.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  const handleResetSearch = () => {
    setSearchTerm("");

    console.log("searchTerm", searchTerm);
  };

  return (
    <nav className=" ">
      <div className="bg-p1">
        <div
          className="customWidth text-sm flex justify-between
         text-white h-[40px]"
        >
          <div className="flex gap-5  items-center    ">
            <p className="font-medium flex items-center gap-1   ">
              <Phone className="w-[16px]" /> <span>+9 (681) 843-4596</span>
            </p>
            <p className="font-medium 3xs:flex items-center gap-1 hidden ">
              <Mail className="w-[16px]" /> <span>info@companiesdir.com</span>
            </p>
          </div>
          <div className="md:flex items-center  hidden ">
            <p className="font-medium  flex gap-1 items-center">
              {/* Discover your perfect rental apartment with our advanced search
               */}
              <SearchCheck className="w-[20px]" />{" "}
              <span className="">
                Discover top companies effortlessly
                <span className="3xs:hidden xl:inline">
                  with our smart filtering and search tools.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          scrollY > 30
            ? "border-b w-screen ml-[-4px] fixed  top-0 left-0 z-50"
            : ""
        }  border-b3 border-b bg-white  `}
      >
        <div className="customWidth   h-[70px] flex  justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div>
                <h2 className="text-xl text-p1  font-bold font-Inter">
                  Data Hub
                </h2>
                <p className="text-[12px] -mt-1 text-d1">Directory</p>
              </div>
            </div>
          </div>

          <div
            className="border-2 border-white focus-within:border-2
           focus-within:border-p1 rounded-sm p-[1px] 2xl:w-[400px] xl:w-[300px] 
           md:w-[380px] sm:w-[300px] sm:block hidden"
          >
            <div className="pl-2 rounded-sm flex items-center border border-[#D9D9D9]  ">
              <input
                name="searchTerm"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  // setParams([
                  //   ...(params?.filter((p) => p.name !== "searchTerm") || []),
                  //   { name: "searchTerm", value: e.target.value },
                  // ])

                  dispatch(
                    setGlobalParams([
                      ...(globalParams?.filter(
                        (p) => p.name !== "searchTerm"
                      ) || []),
                      { name: "searchTerm", value: e.target.value },
                    ])
                  );
                }}
                id="field-id"
                className=" text-sm text-gray-950 w-full h-[37px] outline-none "
                type="text"
                placeholder="Search for companies,industires..."
                tabIndex={0}
              />

              <Link to={`/all-companies`}>
                <div
                  onClick={handleResetSearch}
                  className="bg-p1 px-3 py-1 mr-1 cursor-pointer mx-auto
               text-white flex items-center justify-center rounded-sm"
                >
                  <Search className=" w-[14px] " />
                </div>
              </Link>
            </div>
          </div>
          {/* py-3 */}
          <div
            className={`${
              scrollY > 30 ? "border-none" : ""
            } ] xl:flex  items-center hidden  px-12 `}
          >
            <ul className="">{navLinks}</ul>
          </div>

          <div className="">
            {user ? (
              <div className="dropdown lg:block dropdown-end">
                <div className="flex gap-3 items-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-[40px] rounded-full text-white">
                      <img src={user?.img} alt={user?.name} />
                    </div>
                  </label>
                  <div>
                    <button
                      onClick={handleLogout}
                      className="text-sm cursor-pointer flex items-center gap-1 font-Inter font-semibold text-p1"
                    >
                      Logout{" "}
                      <HiOutlineLogout className="text-xl"></HiOutlineLogout>
                    </button>
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user?.name}</a>
                  </li>
                  <li>
                    <Link
                      to={`/${user.role}/overview-dashboard`}
                      className="justify-between"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <button className="mt-1">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-sm bg-p1 text-white font-Inter rounded-md font-semibold py-2.5 px-6"
                        : "text-sm hover:bg-p1/80 bg-p1 text-white font-Inter rounded-md font-semibold py-2.5 px-6 flex items-center gap-3"
                    }
                  >
                    <User className="w-[20px]" /> Login
                  </NavLink>
                </button>
                <div className="">
                  <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="2xs:block xl:hidden
                 hover:bg-[#f8fafc] cursor-pointer p-1.5 rounded-sm "
                  >
                    <Menu className="w-8 " />
                  </button>
                </div>

                {mobileMenu && (
                  <div
                    className="fixed inset-0 bg-[#000] opacity-60 z-40"
                    onClick={() => setMobileMenu(false)}
                  />
                )}
                <div
                  className={`xl:hidden  bg-white transition-all duration-300 fixed top-0 right-0 h-full shadow-xl z-50 border-l overflow-hidden w-80 ${
                    mobileMenu
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="p-4  ">
                    <button
                      onClick={() => setMobileMenu(!mobileMenu)}
                      className="2xs:block xl:hidden hover:bg-[#f8fafc] cursor-pointer p-2 rounded-sm"
                    >
                      <X className="w-[25px]" />
                    </button>
                    <div className="mt-10 mb-2">
                      <div
                        className="border-2 border-white focus-within:border-2
           focus-within:border-p1 rounded-sm p-[1px] w-full "
                      >
                        <div className="pl-2 rounded-sm flex items-center border border-[#D9D9D9]  ">
                          <input
                            name="searchTerm"
                            value={searchTerm}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);

                              dispatch(
                                setGlobalParams([
                                  ...(globalParams?.filter(
                                    (p) => p.name !== "searchTerm"
                                  ) || []),
                                  { name: "searchTerm", value: e.target.value },
                                ])
                              );
                            }}
                            id="field-id"
                            className=" text-sm text-gray-950 w-full h-[37px] outline-none "
                            type="text"
                            placeholder="Search for bikes,brands,model..."
                            tabIndex={0}
                          />

                          <Link to={`/all-products`}>
                            <div
                              onClick={handleResetSearch}
                              className="bg-p1 px-3 py-1 mr-1 cursor-pointer mx-auto
               text-white flex items-center justify-center rounded-sm"
                            >
                              <Search className=" w-[14px] " />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className={`w-full border-b  mt-8 pb-5 list-none `}>
                      {navLinks}
                    </div>

                    <div className="mt-8">
                      <Link to="/login">
                        <Button
                          className="w-full cursor-pointer mt-2 h-[45px]
                     bg-p1 "
                        >
                          <User /> Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
