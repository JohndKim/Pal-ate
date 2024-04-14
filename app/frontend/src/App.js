import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FoodPage from '../src/pages/FoodPage'
import FriendsPage from '../src/pages/FriendsPage'
import HomePage from '../src/pages/HomePage'
import ProfilePage from '../src/pages/ProfilePage'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/food' element={<FoodPage/>}/>
        <Route path='/friends' element={<FriendsPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
