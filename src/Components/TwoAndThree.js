import React from 'react';
import ImageOne from '../assets/ImageOne.jpg'
import Chair from '../assets/chair.jpg'
import Patio from '../assets/patio.jpg'
import ImageTwo from '../assets/ImageTwo.jpg'

import './Two.css'

function SectionTwoAndThree() {
    return (
        <>
    <Two />
    <Three />
    </>
    )
}

function Two() {
    return (
        <section className="section-two"> 
            <Text
                collectionTitle="The Chairs of Tomorrow, Now"
                collectionText="Ease body tension, imporve your form. Think about your future today for yourself."
                image={Chair}
            />
            <Image 
                altTag="our stylish chairs"
                image={ImageOne}
            />
        </section>
    )
}

function Three() {
    return (
        <secton className="section-two">
            <Image 
                altTag="New Patio Collection"
                image={ImageTwo}
            />
            <Text
                collectionTitle="Downtime just got better"
                collectionText="Enjoy youe time off. After all you deserve it. So site poolside or see the skyline."
                image={Patio}
            />
        </secton>
    )
}

function Image(props) {
    return (
        <div className="image">
            <img src={props.image} alt={props.altTag}></img>
        </div>
    )
}

function Text(props) {
    return (
        <div className="text-section">
            <img src={props.image} alt="Chair collections"></img>
            <div className="content">
                <h3>{props.collectionTitle}</h3>
                <p>{props.collectionText}</p>
            </div>
            
        </div>
    )
}

export default SectionTwoAndThree;

// Need to rename classNames