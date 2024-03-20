//package import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//page import
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";

//function App
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
