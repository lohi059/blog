import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Bloghome from './pages/Bloghome';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path = "/*" element = {<Bloghome/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
