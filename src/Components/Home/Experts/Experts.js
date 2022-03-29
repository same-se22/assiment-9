import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img:'https://www.columbiasc.edu/sites/default/files/styles/spotlight_image/public/2021-11/IMG_4710_0.JPG?h=88e39782&itok=VDXpAZLv',
        name:'Jassica Moore',
        expertize:'HTML expert'
    },
    {
        img:'https://www.thedanceworkshop.ca/a/img/instructors-colleen.jpg',
        name:'COLLEEN ROSS',
        expertize:'CSS & BOOTHSTRAP expert'
    },
    {
        img:'https://www.rosemarysdance.com/uploads/1/2/0/5/120579685/editor/heather.png?1533238951',
        name:'Talia Laurito ',
        expertize:'SEO expert'
    },
    {
        img:'https://www.montanadanceworks.com/uploads/1/2/6/1/12619753/published/1656.jpg?1624478814',
        name:'ERYNN METESH',
        expertize:'JavaScript expert'
    },
    {
        img:'https://latragnadance.co.uk/media/zoo/images/Bella_d77d673d976c17efa2dd0598fd2f74f0.jpg',
        name:'Bella Moore',
        expertize:'ES6 expert'
    },
    {
        img:'https://latragnadance.co.uk/media/zoo/images/Emily_M_5a64449f0321280320e8a3a0302cae8f.jpg',
        name:'Emily Matthew',
        expertize:'REACT & NODE expert'
    }
]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key = {expert.name}
                    expert ={expert}
                    ></Expert>)
                }
            </div>
            
        </div>
    );
};

export default Experts;