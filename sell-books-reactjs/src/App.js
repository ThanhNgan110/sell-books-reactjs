import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import RootPage from "./pages/Root";
import Profile from "./pages/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "account",
          children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "forgotPassword", element: <ForgotPassword /> },
             { path: "profile", element: <Profile/> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
