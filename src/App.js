import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import {useStateValue} from './StateProvider'
import { useEffect } from "react";
import {auth} from './firebase'

function App() {
  const [{cart}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        dispatch({
          type: "SET_USER",
          user: user
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }

  }, [])

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
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
