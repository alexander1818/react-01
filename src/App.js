import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Myposts from './components/Profile/MyPosts/Post/Myposts';
import Profile from './components/Profile/Profile';
import Timer from './components/Timer/Timer';
import Notification from './components/Notification/Notification';

const App = () => {
  return (
    <div className="app-wrapper">
      <Timer/>
      <Notification />
      
      {/* <Header />
      <NavBar />
      <Myposts />
      <Profile /> */}
    </div>
  )
}

export default App;
