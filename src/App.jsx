import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ForgetPasswordForm from "./Pages/Auth/Forget";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Communities from "./Pages/Home/Communities";
import { Routes, Route, useLocation } from "react-router-dom";
import Pricing from "./Pages/Pricing/Pricing";
const App = () => {
  const location = useLocation();

  const hiddenPaths = ["/sign-in", "/join", "/forget-password"];
  const hideNavbarAndFooter = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Communities />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;