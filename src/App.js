import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/pages/home/Home.jsx";
import Single1 from "./components/pages/single1/single1.jsx";
import Single2 from "./components/pages/single2/single2.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

// function App() {
//   return (
//     <>
//     <Navbar />
//     <Single1 />
//     </>
//   );
// }

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post1" element={<Single1 />} />
      <Route path="/post2" element={<Single2 />} />
    </Routes>
    </Router>
  );
}

export default App;