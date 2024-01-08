// import logo from './logo.svg';
import './App.css';
import { Auth, ContactUs, Home } from './Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
