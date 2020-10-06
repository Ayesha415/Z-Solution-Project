import React from 'react';
import './App.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Achievement from './components/achievement';
import Contact from './components/contact';
import WebDevelopment from './components/web-development';
import MobileDevelopment from './components/mobile-development';
import Marketing from './components/marketing';
import CaseStudy from './components/casestudy';
import Project from './components/project';
import Podcast from './components/podcast';
import Copyright from './components/copyright';
function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Achievement/>
      <Contact/>
      <WebDevelopment/>
      <MobileDevelopment/>
      <Marketing/>
      <CaseStudy/>
      <Project/>
      <Podcast/>
      <Copyright/>
    </div>
  );
}

export default App;
