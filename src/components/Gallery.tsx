import React, { useState } from 'react';
import './Gallery.css';

import muaazRocket from '../images/muaaz-rocket.jpg';
import payload from '../images/payload.jpg';
import r4s2023TeamRocket from '../images/r4s2023-team-rocket.jpg';
import tarcteam2022 from '../images/tarcteam2022.jpg';
import teamAward from '../images/team-award.jpg';
import teamRocket from '../images/team-rocket.jpg';
import rocketLaunch from '../images/rocket-launch.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import img19 from '../images/img19.jpg';
import img20 from '../images/img20.jpg';
import img21 from '../images/img21.jpg';
import img22 from '../images/img22.jpg';
import img23 from '../images/img23.jpg';
import img24 from '../images/img24.jpg';
import img25 from '../images/img25.jpg';
import img26 from '../images/img26.jpg';
import img27 from '../images/img27.jpg';
import img28 from '../images/img28.jpg';
import img29 from '../images/img29.jpg';
import img30 from '../images/img30.jpg';

const images = [
    { src: teamRocket, caption: '2024 Rockets For Schools Team' },
    { src: teamAward, caption: '2024 Team Places 2nd at Rockets For Schools Competition' },
    { src: rocketLaunch, caption: '2024 Rockets For Schools Launch' },
    { src: payload, caption: '2024 Payload After Launch' },
    { src: muaazRocket, caption: 'Muaaz Ahmed Carries 2024 Rocket to Launch' },
    { src: r4s2023TeamRocket, caption: '2023 Team Places 2nd at Rockets For Schools Competition' },
    { src: tarcteam2022, caption: '2022 American Rocketry Challenge Team' },
    { src: img1, caption: '' },
    { src: img2, caption: '' },
    { src: img3, caption: '' },
    { src: img4, caption: '' },
    { src: img5, caption: '' },
    { src: img6, caption: '' },
    { src: img7, caption: '' },
    { src: img8, caption: '' },
    { src: img9, caption: '' },
    { src: img10, caption: '' },
    { src: img11, caption: '' },
    { src: img12, caption: '' },
    { src: img13, caption: '' },
    { src: img14, caption: '' },
    { src: img15, caption: '' },
    { src: img16, caption: '' },
    { src: img17, caption: '' },
    { src: img19, caption: '' },
    { src: img20, caption: '' },
    { src: img21, caption: '' },
    { src: img22, caption: '' },
    { src: img23, caption: '' },
    { src: img24, caption: '' },
    { src: img25, caption: '' },
    { src: img26, caption: '' },
    { src: img27, caption: '' },
    { src: img28, caption: '' },
    { src: img29, caption: '' },
    { src: img30, caption: '' },
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