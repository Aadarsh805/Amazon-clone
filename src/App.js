import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Home/>
            </>
          } />
          <Route path="/checkout" element={<Checkout/>} />
          {/* <Route path="/login" element={<Test/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
