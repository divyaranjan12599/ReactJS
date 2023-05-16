import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [modeIcon, setModeIcon] = useState("moon");
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const handleCallback = (data) => {
    setSearch(data);
  }
  const handleText = (data) => {
    setText(data);
  }

  const toggleMode = (e) => {
    e.preventDefault();
    if (mode === 'light') {
      setMode('dark');
      setModeIcon('sun');
      document.body.style.backgroundColor = "#525252";
    } else {
      setMode('light');
      setModeIcon('moon');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <div style={{ backgroundColor: mode === "light" ? "white" : "#525252", color: mode === "dark" ? "white" : "black" }}>
      <Router>
        <Navbar title="TextUtils" parentCallback={handleCallback} text={text} mode={mode} modeIcon={modeIcon} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze" search={search} parentCallback={handleText} mode={mode} />} />
          <Route exact path='/about' element={<About />} />
          {/* <Route index element={<TextForm heading="Enter the text to analyze" search={search} parentCallback={handleText} mode={mode} />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
