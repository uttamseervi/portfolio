import React from 'react'
import { MovingComponent } from "react-moving-text"
function TextFadein() {
    const Letters = [
        "Fullstack Web Developer from Banglore!"
    ]
    return (
        Letters.map((letter, index) =>
            <MovingComponent
                type="flipIn"
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

export default TextFadein
