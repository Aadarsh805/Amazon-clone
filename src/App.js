import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header'
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/checkout" element={<Header/>} />
          {/* <Route path="/login" element={<Test/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
