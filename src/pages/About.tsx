import React from 'react';

function About() {
    return (
        <div className='About'>
        <h1>ABOUT</h1>
        <h2>Demo creata con l'utilizzo di Vite.js, React TypeScript e React Router</h2>
        <br/>
        <form action='/'>
        <button id="default-button"
        type='submit'>Homepage</button>
        </form>
        </div>
    )
}

export default About;