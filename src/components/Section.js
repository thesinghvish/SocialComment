import React from 'react'

import img2 from '../Images/play.png';

import img3 from '../Images/party.svg';

import google from '../Images/google.jpg'

import amazon from '../Images/amazon1.jpg';

import northern from '../Images/northern.png';

import skrill from '../Images/skrill.jpg';

import './Section.css';

const Section = () => {
    return (
        <>
            <section className="main-section">
            <div className="left">
                <p className="big-font">Don't worry.<br />
                    We are here for <br />
                    every solution.
                </p>
                <br />
                <br />
                <p className="desc">Bushwick meh Blue  bottle pork belly mustache skateboard 3 wolf<br />
                    moon. Actuallybeard single-origin conffee.twee 90's PBR Echo Park
                </p>
                <div className="button2">
                    <button className="btn2">Get Started</button>


                    <div className="videobutton">
                       
                        <button className="videobtn"> <img className="playimg" src={img2} alt="play" />Watch video</button>
                        
                    </div>
               


                </div>



            </div>
            <div className="right">
                    <img className="rightimg" src ={img3} alt="rightcoverimage"></img>


                </div>

                

        </section>
        <div className="clientlogo">
            <img className="amazon" src={amazon} alt="amazon"></img>
            <img className="google" src={google} alt="google"></img>
            <img className="northern" src={northern} alt="northern"></img>
            <img className="skrill" src={skrill} alt="skrill"></img>



            </div>
        </>
    )
}

export default Section
