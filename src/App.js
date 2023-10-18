import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/HomePg";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';
import { useEffect, useState } from 'react';
import { auth } from './Components/Firebase/Config';


function App() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("");
      }
    });
  }, []); 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home name={userName} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          
          <Route path='*' element={<NotFound />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
