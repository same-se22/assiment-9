import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/same-se22/coursedata/main/product.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    services.slice(4);
    return (
        <div id='services'>
            <h2 className='text-primary mt-5'>Our Services</h2>
            <div className='service-container'>

                        {
                            services.map(service =><Service
                            key = {service.id}
                            // name = {service.name}
                            service = {service}
                            ></Service>)
                        } 

</div>
        </div>
    );
};

export default Services;