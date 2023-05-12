import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
