import React from 'react';
import './One.css';

function One() {
    return (
        <section className="section section-one">
            <Logo />
            <Menu />
            <Text />
        </section>
    )
}

function Logo() {
    return (
        <a className="logo" id="logo">Sorella</a>
    )
}

function Menu() {
    return (
        <ul className="menu">
            <li className="menu-item"><a href="#">Shop</a></li>
            <li className="menu-item"><a href="#">About</a></li>
            <li className="menu-item"><a href="#">The Studio</a></li>
        </ul>
    )
}

function Text() {
    return (
        <div className="text">
        <h1>Bring Comfort to Unique</h1>
        <p>The new season calls for a sock drawer refresh. Find your next pair, from lightweight merino to cashmere.</p>
        <ArrowRight /> 
        </div>
    )
}

function ArrowRight() {
    return (
    <div className="arrow">
    <div className="background-animation"></div>
    <a>Shop Now</a>
    <svg xmlns="http://www.w3.org/2000/svg" height="14">
  <defs>
    <marker id="arrowright-161910551097603255" markerWidth="12" markerHeight="14" refX="10" refY="7" orient="auto">
      <path d="M1,1,11,7,1,13" fill="none" stroke="#000" stroke-linejoin="bevel" stroke-width="1"></path>
    </marker>
  </defs>
  <line x1="0" x2="80%" y1="50%" y2="50%" stroke="#000" stroke-width="1" marker-end="url(#arrowright-161910551097603255)" transform="translate(-3 0)"></line>
</svg>
   </div>
   )}
export default One;