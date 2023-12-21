import Slider from "react-slick";
import HeroCarousel from "./HeroCarousel";
import FindBike from "./FindBike";

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className="w-full relative max-w-6xl mx-auto" >
        <Slider {...settings} >
            <HeroCarousel/>
        </Slider>
        <FindBike />
    </div>
  )
}

export default Hero
