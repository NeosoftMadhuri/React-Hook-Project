import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductData from './Components/ProductData';
import Navs from './Components/Navs';
import Course from './Components/Course';
import UserInfo from './Components/UserInfo';


function App() {
  return (
    <>
      <Router>
        <Navs/>
        <Routes>
          <Route path="/" exact element={<ProductData />} />
          <Route path="/course" exact element={<Course />} />
          <Route path="/userinfo" exact element={<UserInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
