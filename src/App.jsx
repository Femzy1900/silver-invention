import Sidebar from "./components/sidebar/Sidebar"
import Homepage from "./page/Homepage/Index"
import Payment from "./page/Homepage/payment"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <Router >
        <div className="flex ">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
        </div>
    </Router>
   
    )
}