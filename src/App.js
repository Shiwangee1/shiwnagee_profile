import "./App.css";
import Hero from "./Component/Hero";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./Component/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
         <Route path="/project" element={< Projects/>} />
         <Route path="/experience" element={<Experience/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;