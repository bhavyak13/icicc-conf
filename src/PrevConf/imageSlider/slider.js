import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';



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
	<div >
		<Slider {...settings } style={{width: "60vw",height:"auto",margin:"60px 0"}}>
		{props.images.map((item) => {
			return(
			<img src={item.anchor} style={{width: "200px",height:"auto"}}/>
			);
			
		})}
		</Slider>
		
	</div>
		</>
)
}
export default ImageSlider;
