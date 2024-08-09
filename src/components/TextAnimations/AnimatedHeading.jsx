import React from 'react'
import { MovingComponent } from "react-moving-text"

function AnimatedHeading() {
    const Letters = [
        "I'm Uttam Seervi"
    ]
    return (
        Letters.map((letter, index) =>
            <MovingComponent
                type="slideInFromLeft"
                duration="1800ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="backwards">
                {letter}
            </MovingComponent>)
    )
}

export default AnimatedHeading
