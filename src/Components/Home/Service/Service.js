import React from 'react';
import'./Service.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    // const {service} = props;
    const {id, name, price, des, img} =service;

    return (
        <div className='service pb-5'>
           <div>
           <img className = "card-pic" src={img} alt="" /> 
           </div> 
           <h3>{name}</h3>   
           <h5>Price: ${price}</h5>  
           <p className='px-3'>{des}</p>
           <Link to={`/booking/${id}`}>
           <button className='btn btn-warning'>Back The Service</button>
           </Link>

            
        </div>
    );
};

export default Service;

