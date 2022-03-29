import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from  '../../../Image/web-development-course.jpg';
import banner2 from  '../../../Image/19_best-courses_blog_600x341.jpg';
import banner3 from  '../../../Image/best-web-development-courses.jpg';

const Banner = () => {
    return (
        <>
        <Carousel >
  <Carousel.Item >
    <img 
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>LET'S DANCE WITH US</h3>
      <p>and hold your beloved moments</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </>
    );
};

export default Banner;