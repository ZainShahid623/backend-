import { Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Api from "./components/api/Api";
import Usestatepractice from "./components/usestatePractice/Usestatepractice";
import Apidetails from "./components/api/Apidetails";
function App() {
  return (
<div>
  <Navbar logotitle="<Zcode/>"/>
    <Routes>
    <Route path="/" element={<Home/>} > </Route>
    <Route path="/search" element={<Search/>} > </Route>
    <Route path="/api" element={<Api/>} > </Route>
    <Route path="/usestatePractice" element={<Usestatepractice/>} > </Route>
    <Route path="/api/:id" element={<Apidetails/>} > </Route>
   
  </Routes>
  </div>  
  );
}

export default App;
