import Favicon from "react-favicon";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../ui/navbar/Navbar";
import Footer from "../ui/pages/home/footer/Footer";
const RootLayout = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const hideNavbarPaths = [
    "/login",
    "/change-password",
    "/register",
    // "/all-products",
    `/details/${id}`,
    // "/about",
  ];

  return (
    <div>
      <Favicon url="https://i.ibb.co/vvcP1Kh/Untitled-design.png" />
      <div className=" font-Inter text-[#000000]">
        {!hideNavbarPaths.includes(pathname) && <Navbar />}
        <Outlet />
      </div>

      {/* Conditionally render Footer */}
      {!hideNavbarPaths.includes(pathname) && <Footer />}
    </div>
  );
};

export default RootLayout;
