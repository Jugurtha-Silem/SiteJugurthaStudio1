import React from 'react';
import Navigation from '../components/Navigation';
import NavigationsRight from '../components/NavigationsRight';
import ReactPlayer from 'react-player';

const LogicPro = () => {
    return (
        <div className='container'>

            <div className='navigation'>
                <Navigation/>
            </div>

            <div className="wrapper">
                

                <div className="cours-video">

                    <div className="video1">
                        Box 1

                        
                    </div>
                    <div className="video2">

                        
                    </div>
                    <div className="video3">

                      
                    </div>

                    
                </div>

                <div className="right-card">
                    <NavigationsRight/>
                </div>


            </div>
        </div>
    );
};

export default LogicPro;