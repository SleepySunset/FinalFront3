import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layouts/Layout";
import './Styles/app.css'


function App() {
  return (
      <div className="app-container">
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/favs" element={<Favs/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
