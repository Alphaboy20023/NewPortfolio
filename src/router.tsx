import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contactMe";
import MyProjects from "./pages/MyProjects";


const MyAppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Portfolio />} />
                <Route path="/contact" element={ < Contact/>} />
                <Route path="/projects" element={ < MyProjects/>} />
            </Routes>
        </Router>
    )
}

export default MyAppRoutes