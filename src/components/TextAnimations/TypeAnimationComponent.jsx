// TypeAnimationComponent.js
import React from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import { TypeAnimation } from 'react-type-animation';

const splitter = new GraphemeSplitter();

const TypeAnimationComponent = () => {
    return (
        <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
                'Hello 🇬🇧',
                2000,
                'Ciao 🇮🇹',
                2000,
                '你好 🇨🇳',
                2000,
                'Здравейте 🇧🇬 ',
                2000,
                'Hola 🇪🇸',
                2000,
                'Bonjour 🇫🇷',
                2000,
                'नमस्ते 🇮🇳',
                2000
            ]}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
        />
    );
};

export default TypeAnimationComponent;
