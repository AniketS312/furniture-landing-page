import React from 'react';
import './Four.css'

function Four() {
    return  (
        <section className="section-four">
            <div className="content">
                <h2>Simple Time spent is a luxury</h2>
                <p>We are building a brand that feels good - to us, to you, our community, and the planet. For us, aspiration means investing in quality and living by your values. We stand behind craftsmanship, sustainable materials and ethical processes, and empowering the voices of women and BIPOC.
                </p>
                <p>
                We design Comme Si to balance beauty, functionality and longevity. Every piece is made in Italy to have a place in your personal collection for years to come. And because good things shouldn’t come with negative consequences, we work with partners who align with our values. 
                </p>
                <ArrowRight />
            </div>
           
        </section>
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

export default Four;