import Slider from "react-slick";
import HeroCarousel from "./HeroCarousel";
import FindBike from "./FindBike";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPromotionAsync } from "../../redux/promotion/promotionAsyncThunk";
import { selectPromotions } from "../../redux/promotion/promotionSlice";
import Loader from "../Loader";

const Hero = () => {
  const dispatch = useAppDispatch();
  const promotions = useAppSelector(selectPromotions);

  const settings = {
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(fetchPromotionAsync());
  }, []);

  return (
    <div className="w-full relative max-w-6xl mx-auto" >
      {promotions?.status === "success" ? <Slider {...settings} >
        {
          promotions?.data?.map((item) => (
            <HeroCarousel key={item._id} title={item.title} description={item.description} productId={item.productId} />
          ))
        }
      </Slider>
        :
        <div className="w-full h-[50vh]" >
          <Loader />
        </div>
      }
      <FindBike />
    </div>
  )
}

export default Hero
