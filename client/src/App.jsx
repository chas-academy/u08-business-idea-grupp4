import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center mt-0 min-h-screen">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
