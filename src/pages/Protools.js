import React from 'react';
import Navigation from '../components/Navigation';
import NavigationsRight from '../components/NavigationsRight';
import ReactPlayer from 'react-player';

const Protools = () => {
    return (
        <div className='container-ptotools '>

            <div className="content-bottom">
                <Navigation/>
            </div>

            <div className="container-video">
                <h2>Protools</h2>
                <ReactPlayer url="https://www.youtube.com/watch?v=EPOs1Fln05w"  
                controls
                width={700}
                height={400}
                className="player-video"
                />
                <ReactPlayer url="https://www.youtube.com/watch?v=EPOs1Fln05w"  
                controls
                width={700}
                height={400}
                className="player-video"
                />
                <ReactPlayer url="https://www.youtube.com/watch?v=EPOs1Fln05w"  
                controls
                width={700}
                height={400}
                className="player-video"
                />
            </div>
            
        </div>
    );
};

export default Protools;