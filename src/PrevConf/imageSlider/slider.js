import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import "../../header.module.css"


const ImageSlider = (props) => {



  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]

  };

  return (
    <>
      <div>
        <br />
        <h2>IMAGE GALLERY</h2>
      </div>
      <div style={{ width: "100%"}}>
        <div style={{ width: "60vw", margin: "60px 0" }}>
          <Slider {...settings}>
            {props.images.map((item) => {
              return (
                <div style={{margin:"2px"}}  >
                  <div style={{width: "90%",height:"300px"}}>
                  <img src={item.anchor} style={{objectFit:"fill", width: "100%",height:"100%"}}/>                    
                  </div>
                </div>
              );

            })}
          </Slider>
        </div>

      </div>
    </>
  )
}
export default ImageSlider;
