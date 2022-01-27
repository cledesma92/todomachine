import React from 'react';
import pwaLogo from '../Footer/assets/pwaLogo.svg'
import reactLogo from '../Footer/assets/reactLogo.svg'
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-container'>
                <img 
                    className='reactLogo' 
                    src={reactLogo} 
                    alt=''
                />
                
                <img 
                    className='pwaLogo' 
                    src={pwaLogo} 
                    alt=''
                />
                
                <p>Develop by <a href='https://github.com/cledesma92'>cledesma92 <i className="fab fa-github"></i></a></p>
            </div>
        </div>
    );
}

export { Footer };