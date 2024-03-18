import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import { AboutUs } from './AboutUs';
import { Home } from './Home';


function App() {
  return (
    
<BrowserRouter>
  <Routes><Route exact path="/" element={<App/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/aboutus" element={<AboutUs/>} />
  </Routes>
</BrowserRouter>

);
}

export default App;
