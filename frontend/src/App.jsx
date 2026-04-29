import { useEffect } from "react";
import axios from "axios";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    axios.get("/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />

        {/* optional default route */}
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;