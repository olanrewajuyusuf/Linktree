import { Route, Routes } from "react-router-dom";
import LinkTree from "./components/Profile";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LinkTree />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
