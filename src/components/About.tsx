import React from 'react';
import './About.css';
import logo from '../images/nhsaerospace-logo.png';
import teamPhoto from '../images/Northville High School - 2025 - Team Photo.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='infobg'>
                <div className='info'>
                    <h1>Our Club</h1>
                    <div className='club-description'>
                        <p>The main focus of the Northville Aerospace Club is rocketry. We compete in various national level competitions, placing second in <a href='https://www.rockets4schools.org/' target='_blank'>Rockets For Schools</a> in 2024 and third in 2023, and competing in the <a href='https://rocketcontest.org/' target='_blank'>American Rocketry Challenge</a> annually. We are fortunate to have a mentor with over a decade of experience in rocketry who can guide us through the process of high-quality rocket design and construction. If you want to gain invaluable experience in STEM while launching six-foot rockets alongside one of the greatest High School aerospace clubs in the nation, then the Northville Aerospace Club might be for you.</p>
                        <img src={logo} alt="Northville Aerospace Logo" className='logo' />
                    </div>
                    <p>Our club meets after school on Mondays from 2:30 to 3:00 PM in room 160.</p>
                    <p>No experience is required!</p>
                    <p>Our club includes a membership fee of $35. <a href='https://docs.google.com/document/d/14UhXPTNW9c1JLwJY23BT366LRBvbfoYqh2jQ_8l6THM/edit' target='_blank'>See additional fee information</a>.</p>
                    <p>In addition to our 30 minute meetings on Mondays, most club activity takes place outside of the Northville High School. This includes launches and build sessions. To remain actively involved in the club, members are expected to attend these additional meetings regularly.</p>
                    <p>It is also important to note that we are affiliated with <a href='https://www.nar.org/' target='_blank'>NAR Section #859</a>.</p>
                    <h1>Our Mission</h1>
                    <p>The mission of the Northville Aerospace Club is to promote growth in STEM for students through aerospace engineering. Our club fosters an interdisciplinary approach to learning, as our projects teach students about different aspects of mechanical, chemical, electrical, and even software engineering. Our goal is to spark an interest in STEM within all of our students and give them the fundamental experience required to succeed in future STEM endevours.</p>
                </div>
            </div>
            <div className='team'>
                <h1>Our Team</h1>
                <div className='team-photo-container'>
                    <img src={teamPhoto} alt='Northville High School Aerospace Team 2025' className='team-photo' />
                    <div className='team-photo-caption'>
                        <p>Northville High School Aerospace Team - 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;