import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Blog from "./pages/Blog.jsx";
import SignUp from "./pages/SignUp.jsx"
import Login from "./pages/Login.jsx"
import BlogPage from "./pages/BlogPage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/blog" element={<BlogPage />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;