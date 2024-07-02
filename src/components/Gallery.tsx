import React, { useState } from 'react';
import './Gallery.css';

import muaazRocket from '../images/muaaz-rocket.jpg';
import payload from '../images/payload.jpg';
import r4s2023TeamRocket from '../images/r4s2023-team-rocket.jpg';
import tarcteam2022 from '../images/tarcteam2022.jpg';
import teamAward from '../images/team-award.jpg';
import teamRocket from '../images/team-rocket.jpg';

const images = [
    { src: teamRocket, caption: '2024 Rockets For Schools Team' },
    { src: teamAward, caption: '2024 Team Places 2nd at Rockets For Schools Competition' },
    { src: payload, caption: '2024 Payload After Launch' },
    { src: muaazRocket, caption: 'Muaaz Ahmed Carries 2024 Rocket to Launch' },
    { src: r4s2023TeamRocket, caption: '2023 Team Places 2nd at Rockets For Schools Competition' },
    { src: tarcteam2022, caption: '2022 American Rocketry Challenge Team' }
];


const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='pictures'>
            <button onClick={prevImage} className='scroll-btn'>{'<'}</button>
            <figure className='slideshow-figure'>
                <img src={images[currentIndex].src} className={'slideshow-image'} />
                <p>{images[currentIndex].caption}</p>
            </figure>
            <button onClick={nextImage} className='scroll-btn'>{'>'}</button>
        </div>
    );
}

export default Gallery;