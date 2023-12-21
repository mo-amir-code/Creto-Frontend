import Category from "./Category"
import spareParts from "../../assets/categories/spare-parts.png"
import mountainBike from "../../assets/categories/road_bikes.png"
import accessories from "../../assets/categories/bike_accessories.png"
import Slider from "react-slick";
import ArrowButton from "./ArrowButton";
import { useRef } from "react";

const Categories = () => {
    const sliderRef = useRef<Slider>(null);

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500, 
        prevArrow: <ArrowButton left={true} onClick={handlePrev} />,
        nextArrow: <ArrowButton left={false} onClick={handleNext} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return (
        <div className="py-16 w-full mt-96 gap-4 px-4 relative max-w-6xl mx-auto" >
            <Slider {...settings} ref={sliderRef} >
                <Category type="MOUNTAIN & ROAD BIKE" img={mountainBike} />
                <Category type="BICYCLE SPARE PARTS" img={spareParts} />
                <Category type="ACCESSORIES & CLOTHING" img={accessories} />
            </Slider>
        </div>
    )
}

export default Categories
