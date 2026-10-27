import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LevelCards from './components/LevelCards';
import Exercises from './components/Exercises';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <LevelCards />
            <Exercises />
            <Footer />
        </div>
    );
}

export default App;