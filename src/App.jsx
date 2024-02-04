import Sidebar from "./components/sidebar/Sidebar"
import Homepage from "./page/Homepage/Index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <Router >
        <div>
            <Sidebar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            
          </Routes>
        </div>
    </Router>
   
    )
}