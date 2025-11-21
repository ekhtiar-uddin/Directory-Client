import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";

import AllCompanies from "@/components/ui/pages/all-companies/AllCompanies";
import ErrorPage from "../components/ui/pages/error/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllCompanies />,
      },
      {
        path: "/all-companies",
        element: <AllCompanies />,
      },
    ],
  },
]);

export default router;
