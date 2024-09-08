import { Outlet } from "react-router-dom";
import Hero from "./shared/Hero";
import Footer from "./shared/Footer";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Dashboard;
