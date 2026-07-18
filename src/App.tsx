import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Individual from "./pages/Individual.js";
import Group from "./pages/Group.js";
import Latest from "./pages/Latest.js";
import Contact from "./pages/Contact.js";
import GroupDetailPage from "./pages/GroupDetailPage.js";
import Adatkezeles from "./pages/Adatkezeles.js";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/individual", element: <Individual />},
      { path: "/group", element: <Group /> },
      { path: "/group/:slug", element: <GroupDetailPage /> },
      { path: "/latest", element: <Latest /> },
      { path: "/contact", element: <Contact /> },
      { path: "/adatkezelesi-tajekoztato", element: <Adatkezeles /> },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
