import React, { useState } from 'react';
import './Home.css';
import rocket from '../images/rocket-launch.jpg';
import nasa from '../images/nasa-logo.svg';

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
    { src: muaazRocket, caption: 'muaaz Ahmed Carries 2024 Rocket to Launch' },
    { src: r4s2023TeamRocket, caption: '2023 Team Places 2nd at Rockets For Schools Competition' },
    { src: tarcteam2022, caption: '2022 American Rocketry Challenge Team' }
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='home'>
            <div className='title'>
                <div className='introduction'>
                    <h1>Introducing the Northville Aerospace Club</h1>
                    <p>Our Aerospace Club is composed of students at the Northville High School in Northville, Michigan. We have competed in numerous rocketry-related competitions, including Rockets For Schools and the American Rocketry Challenge. Presently, we are also competing in the NASA Student Launch Initiative. Our club takes students through the process of designing and constructing rocekts and their payloads. Although the club is primarily oriented around rocketry, we also provide students with the opportunity to construct and fly drones and model airplanes.</p>
                    <button onClick={() => window.location.href = '/about'}>Learn More</button>
                </div>
                <img src={rocket} alt='Rockets For Schools Launch 2024' className='rocket' />
            </div>
            <div className='upcoming'>
                <h1>Upcoming Events</h1>
                <p>Our club is currently preparing for the <a href='https://www.nasa.gov/learning-resources/nasa-student-launch/'>NASA Student Launch Initiative</a>.</p>
                <img src={nasa} className='nasa' />
                <p>Want to support our team? Become a sponsor today!</p>
                <button onClick={() => window.location.href = '/sponsors'}>Sponsor Us</button>
            </div>
            <div className='pictures'>
                <button onClick={prevImage} className='scroll-btn'>{'<'}</button>
                <figure className='slideshow-figure'>
                    <img src={images[currentIndex].src} className={'slideshow-image'} />
                    <p>{images[currentIndex].caption}</p>
                </figure>
                <button onClick={nextImage} className='scroll-btn'>{'>'}</button>
            </div>
        </div>
    );
}

export default Home;