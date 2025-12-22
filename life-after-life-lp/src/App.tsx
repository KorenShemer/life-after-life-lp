import { useEffect } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/SystemFeatures/SystemFeatures";
import Pricing from "./components/SubscriptionPlans/SubscriptionPlans";

const App = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar"; // or 'he' for Hebrew
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <AboutUs />
      <Features/>
      <Pricing/>
    </div>
  );
};

export default App;
