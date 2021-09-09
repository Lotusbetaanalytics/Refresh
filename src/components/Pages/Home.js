import React from 'react'
import Slider from '../Carousel'
import About from '../About'
import Product from '../Products'
import Footer from '../Footer'

const Home = () => {
    return (
        <>
        <Slider />
        <About title="What Refresh Yogurt is all about">
        <p>Refresh is a brand of Integrated Dairies Limited (IDL) which mainly into milking of cows as one of the dairy product. 
                Aside Refresh Yogurt, Integrated Dairies Limited (IDL) also got another brand named Farmfresh which also is into Yogurt Production, Drinking
and stirred milk.
</p>
            <ul>
                <li>Refresh Milk Yogurt </li>
                <li>Refresh Strawberry Yogurt</li>
                <li>Refresh Vanilla Yogurt</li>
            </ul>
        </About>
        <Product />
        <Footer />
        </>
    )
}

export default Home
