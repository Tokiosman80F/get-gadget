import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Header></Header>
      {/* header 68px
          --- min-h-[calc(100vh-(68px+70px))]
          footer 70px
      */}
      <div className="min-h-[calc(100vh-138px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
