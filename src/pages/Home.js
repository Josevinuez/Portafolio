import React from 'react';
import profilePic from '../assets/profile.jpg';

function Home() {
    return (
        <section id="home">
            <h1>Welcome to My Portfolio</h1>
            <img src={profilePic} alt="Profile" />
            <p>Hi, I'm [Your Name]. A passionate developer.</p>
        </section>
    );
}

export default Home;
