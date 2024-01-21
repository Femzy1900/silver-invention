import Sidebar from "./components/sidebar/Sidebar"
import Homepage from "./page/Homepage/Index"


export default function App() {
  return (
    <div className="flex">

      <Sidebar />
      <Homepage />
    </div>
    )
}