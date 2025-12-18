import { useEffect } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";

const App = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar"; // or 'he' for Hebrew
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
