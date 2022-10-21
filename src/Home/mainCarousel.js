import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from "../header.module.css";


const ControlledCarousel=() =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect} style={{padding:10}}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src={require('./images/1.png')}
    //       alt="First slide"
    //       style={{height:600}}
    //     />
    //     <Carousel.Caption>

    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require('./images/venue.png')}
    //       alt="Second slide"
    //       style={{height:600}}
    //     />

    //     <Carousel.Caption>

    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={require('./images/Untitled design.png')}
    //       alt="Third slide"
    //       style={{height:600}}
    //     />

    //     <Carousel.Caption>

    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('./images/1.png')}
                                        alt="First slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('./images/venue.png')}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('./images/Untitled design.png')}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
  );
}
export default ControlledCarousel;
