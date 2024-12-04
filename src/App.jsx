import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/favs" element={<Favs/>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
