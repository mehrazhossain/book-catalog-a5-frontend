import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
