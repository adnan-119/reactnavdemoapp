// import logo from './logo.svg';
// import './App.css';


import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './routingdemo/NavBar';


function App() {
  return (
    <div className="App">
      <h2 align="center">Online Job Portal</h2>
      <Router>
        <NavBar/>
      </Router>
     
    </div>

  );
}

export default App;
