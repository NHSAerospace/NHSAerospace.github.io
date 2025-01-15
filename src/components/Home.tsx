import React, { useState } from 'react';
import './Home.css';
import rocket from '../images/rocket-launch.jpg';
import nasa from '../images/nasa-logo.svg';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div className='home'>
            <div className='title'>
                <div className='introduction'>
                    <h1>Introducing the Northville Aerospace Club</h1>
                    <p>Our Aerospace Club is composed of students at the Northville High School in Northville, Michigan. We have competed in numerous rocketry-related competitions, including <a href='https://www.rockets4schools.org/' target='_blank'>Rockets For Schools</a> and the <a href='https://rocketcontest.org/' target='_blank'>American Rocketry Challenge</a>. Presently, we are also competing in the <a href='https://www.nasa.gov/learning-resources/nasa-student-launch/' target='_blank'>NASA Student Launch Initiative</a>. Our club takes students through the process of designing and constructing rockets and their payloads. Although the club is primarily oriented around rocketry, we also provide students with the opportunity to construct and fly drones and model airplanes.</p>
                    <button onClick={() => window.location.href = '#about'}>Learn More</button>
                </div>
                <img src={rocket} alt='Rockets For Schools Launch 2024' className='rocket' />
            </div>
            <div className='upcoming'>
                <h1>Upcoming Events</h1>
                <p>Our club is currently competing in the <a href='#nasasli'>NASA Student Launch Initiative</a>.</p>
                <img src={nasa} className='nasa' />
                <p>Want to support our team? Become a sponsor today!</p>
                <button onClick={() => window.location.href = '#sponsors'}>Sponsor Us</button>
            </div>
            <Gallery/>
            <div className='accomplishments'>
                <button onClick={() => window.location.href = '#awards'}>Our Accomplishments</button>
            </div>
            <div className='contact-us'>
                <h1>Contact Us</h1>
                <p>For more information, contact us at <a href='mailto:nhsaerospace@gmail.com'>nhsaerospace@gmail.com</a>.</p>
            </div>
        </div>
    );
}

export default Home;