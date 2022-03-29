import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Image/PngItem_5616833.png';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>this page is not avilable</h3>
            <img style={{width: '100%'}} src={notfound} alt="" />
            <Link to ="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;