import React from 'react';
import "./SmallDevice.css";

const SmallDevice = () => {

    return (
        <div className="small">
            <img
                src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
                alt="logo"
            />
            <a>Please switch to a computer</a>
            <div className="copyright">
                <p>Spotify Clone by Cyrrus-Labs</p>
            </div>
        </div>
    );
};

export default SmallDevice;