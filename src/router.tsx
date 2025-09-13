import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Home";



const MyAppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Portfolio />} />
            </Routes>
        </Router>
    )
}

export default MyAppRoutes