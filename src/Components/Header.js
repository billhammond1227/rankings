import React from 'react';

function Header(){
    return <div className="container-fluid header bg-dark pt-4 pb-3">
        <div className="container text-center">
            <img src={require('../images/hd-showcase-updated.png')} alt="Pastime Tournaments Showcase Rankings" className="main-hd"/>
            <div className="row sponsors mx-auto mt-3 mb-3">
                <div className="col pt-3"><a href="https://pocketradar.com" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo-pocket-radar.png')} alt="Pocket Radar" /></a></div>
                <div className="col"><a href="https://pastimetournaments.com" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo-pastime.png')} alt="Pastime Tournaments" className="logo-pastime"/></a></div>
                <div className="col pt-3"><a href="https://www.ncsasports.org/" target="_blank" rel="noopener noreferrer"><img src={require('../images/logo-ncsa.png')} alt="Next College Student Athlete" /></a></div>
            </div>
        </div>
    </div>
}

export default Header