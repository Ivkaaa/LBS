import React, { useEffect, useState } from 'react';
import './app.scss';
import HomePage from "./Pages/HomePage/home-page";
import HiringPage from './Pages/HiringPage/hiring-page';

function App() {

  const [frontDev, setFrontDev] = useState([])

  useEffect( () => {
    fetchFrontDev()
  }, []) //stavljamo joj drugi paramater koji je empty arr kako bi se izvrsila samo  1

  function fetchFrontDev(){
    fetch("https://62b47b2a530b26da4cbf99fb.mockapi.io/frontend")
    .then(res => res.json())
    .then(developerRes => setFrontDev(developerRes))
  }
  
  return (
    <div id="App">
      <HomePage developerRes={frontDev}></HomePage>
      {/* <HiringPage></HiringPage> */}
    </div>
  );
}

export default App;
