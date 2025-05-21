import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ForgetPasswordForm from "./Pages/Auth/Forget";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Communities from "./Pages/Home/Communities";
import { Routes, Route, useLocation } from "react-router-dom";
import Pricing from "./Pages/Pricing/Pricing";
import SubjectDetail from "./Pages/Subject/SubjectDetail";
import ChapterDetail from "./Pages/Subject/Chapter/ChapterDetail";
import DocsLayout from "./Pages/NewSubject/Index";
const App = () => {
  const location = useLocation();

  const hiddenPaths = ["/sign-in", "/join", "/forget-password" , "/DocsLayout"];
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
        <Route path="/subject_detail" element={<SubjectDetail />} />
        <Route path="/chapter_detail" element={<ChapterDetail />} />
        <Route path="/DocsLayout" element={<DocsLayout/>} />

      </Routes>

      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;