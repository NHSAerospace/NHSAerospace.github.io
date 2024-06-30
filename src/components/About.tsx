import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='info'>
                <h1>Our Club</h1>
                <p>At the Northville Aerospace Club, we build and fly drones and model airplanes, but our main focus is rocketry. We compete in various national level competitions, placing second in Rockets For Schools for two consecutive years and competing in the American Rocketry Challenge annually. We are fortunate to have a mentor with over a decade of experience in rocketry who can guide us through the process of high-quality rocket design and construction. If you want to gain invaluable experience in STEM while launching six-foot rockets alongside one of the greatest High School aerospace clubs in the nation, then the Northville Aerospace Club might be for you.</p>
                <p>Our club meets after school on Mondays from 2:30 to 3:00 PM in room 106.</p>
                <p>No experience is required!</p>
                <p>Our club includes a membership fee of $35. <a href='https://docs.google.com/document/d/14UhXPTNW9c1JLwJY23BT366LRBvbfoYqh2jQ_8l6THM/edit'>See additional fee information</a>.</p>
                <p>In addition to our 30 minute meetings on Mondays, most club activity takes place outside of the Northville High School. This includes launches and build sessions. To remain actively involved in the club, members are expected to attend these additional meetings regularly.</p>
                <h1>Our Mission</h1>
                <p>The mission of the Northville Aerospace Club is to promote growth in STEM for students through aerospace engineering. Our club fosters an interdisciplinary approach to learning, as our projects teach students about different aspects of mechanical, chemical, electrical, and even software engineering. Our goal is to spark an interest in STEM within all of our students and give them the fundamental experience required to succeed in future STEM endevours.</p>
            </div>
            <div className='team'>
                <h1>Our Team</h1>
                <div className='member'>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <div>
                        <h2>Reyan Ahmad</h2>
                        <p>Bio</p>
                    </div>
                </div>
                <div className='member'>
                    <div>
                        <h2>Naoki Matsumoto</h2>
                        <p>Bio</p>
                    </div>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                </div>
                <div className='member'>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <div>
                        <h2>Arjun Srinivasan</h2>
                        <p>Bio</p>
                    </div>
                </div>
                <div className='member'>
                    <div>
                        <h2>Matthew McClure</h2>
                        <p>Bio</p>
                    </div>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                </div>
                <div className='member'>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <div>
                        <h2>Muaaz Ahmed</h2>
                        <p>Bio</p>
                    </div>
                </div>
                <div className='member'>
                    <div>
                        <h2>Henry Roberts</h2>
                        <p>Bio</p>
                    </div>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                </div>
                <div className='member'>
                    <img src='https://via.placeholder.com/150' alt='placeholder' />
                    <div>
                        <h2>Veronica Wu</h2>
                        <p>Bio</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;