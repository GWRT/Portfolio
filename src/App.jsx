import React, { useRef, useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import FrontPage from './components/FrontPage'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'

import { AiOutlineArrowUp } from 'react-icons/ai'

export default function App() {

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (homeRef.current) {
      const top = homeRef.current.getBoundingClientRect().top;
      setShowScroll(top < -100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <NavBar 
        refs={{
          home: homeRef, 
          about: aboutMeRef, 
          skills: skillsRef, 
          projects: projectsRef, 
          contact: contactRef
        }} 
      />
      <div ref={homeRef}><FrontPage /></div>
      <div ref={aboutMeRef}><AboutMe /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><MyProjects /></div>
      <div ref={contactRef}><Contact /></div>

      {showScroll && (
        <div onClick={scrollToTop} className="fixed bottom-5 right-5 z-10 bg-main-color text-white p-2 rounded-full cursor-pointer shadow-lg">
          <AiOutlineArrowUp size={30} />
        </div>
      )}
    </>
  )
}
