import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Blog from "./pages/Blog.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import useLoadData from "./hooks/useLoadData.js";
import FullScreenLoader from "./components/FullScreenLoader.jsx";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";

const ProtectedRoute1 = ({ children }) => {
  const { isAuth, role } = useSelector((state) => state.user);
  if (!isAuth || role === "User") {
    return <Navigate to="/" />;
  }

  return children;
};

const ProtectedRoute2 = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth)  {
    enqueueSnackbar("Please Login to see full blog", {variant: "warning"});
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => {
  const isLoading = useLoadData();

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/blog/:blogId" 
            element={
              <ProtectedRoute2>
                <BlogPage />
              </ProtectedRoute2>
            }
          />
          <Route
            path="/create-blog"
            element={
              <ProtectedRoute1>
                <CreateBlog />
              </ProtectedRoute1>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
