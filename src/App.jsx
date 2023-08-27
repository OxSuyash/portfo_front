import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import Blog from "./components/Blog"
import Project from "./components/Project"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import PostsA from "./components/PostsA"
import ProjectsA from "./components/ProjectsA"
import Newpost from "./components/Newpost"
import Editpost from "./components/Editpost"
import Viewpost from "./components/Viewpost"
import Newproject from "./components/Newproject"
import Editproject from "./components/Editproject"
import Viewproject from "./components/Viewproject"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Viewpost />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/posts" element={<PostsA />} />
        <Route path="/dashboard/projects" element={<ProjectsA />} />
        <Route path="/dashboard/posts/new" element={<Newpost />} />
        <Route path="/dashboard/posts/edit/:id" element={<Editpost />} />
        <Route path="/dashboard/projects/new" element={<Newproject />} />
        <Route path="/dashboard/projects/edit/:id" element={<Editproject />} />
        <Route path="/project/:id" element={<Viewproject />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
