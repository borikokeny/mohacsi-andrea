import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.js";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />


      <main className="flex-1 ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
