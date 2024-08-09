import React from 'react';
import { MovingComponent } from 'react-moving-text';

const ParagraphsAnimation = () => {
    const paragraphs = [
       "I create websites and applications that not only look fantastic but also function seamlessly. Whether it's developing innovative apps, or diving into the latest web technologies, I'm all in. Let's connect and turn your ideas into digital reality!."
    ];

    return (
        <div>
            {paragraphs.map((paragraph, index) => (
                <MovingComponent
                    key={index}
                    type="fadeInFromTop"
                    duration="800ms"
                    delay={`${index * 100}ms`}
                    direction="normal"
                    timing="ease-in"
                    iteration="1" // Assuming you want the animation to run once
                    fillMode="none"
                >
                    <p>{paragraph}</p>
                </MovingComponent>
            ))}
        </div>
    );
};

export default ParagraphsAnimation;
