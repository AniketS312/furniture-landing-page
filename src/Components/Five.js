import React from 'react';

import "./Five.css"

import productOne from '../assets/chair-one-min.jpg'
import productTwo from '../assets/computer-one-min.jpg'
import productThree from '../assets/desk-one-min.jpg'
import productOneHover from '../assets/chair-one-hover-min.jpg'

function Five() {
    return (
        <section className="section-five">
            <div className="product-container">
                <Product 
                    imgDefault={productOne}
                    productTitle="Lavon Chair"
                    productPrice="$230"
                    description="Desk"
                />
                <Product 
                    imgDefault={productTwo}
                    productTitle="Lavon Chair"
                    productPrice="$750"
                    description="Desk"
                />
                <Product 
                    imgDefault={productThree}
                    productTitle="Lavon Chair"
                    productPrice="$900"
                    description="Desk"
                />
            </div>
        </section>
    )
}

function Product(props) {
    return (
        <div className="product">
            <img className='product-image' 
            alt= 'product one'
             src={props.imgDefault}/>
            <div className='product-description'>
                <h4>{props.productTitle}</h4>
                <h4>{props.productPrice}</h4>
            </div>
            <span>{props.description}</span>

        </div>
    )
}



export default Five;