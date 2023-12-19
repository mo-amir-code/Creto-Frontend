import hero_bike from "../../assets/hero/hero_bike.png"
import Button from "../buttons/Button"

const HeroCarousel = () => {
  return (
    <div className="h-[600px] flex justify-center relative px-2" >
      <XAnimation />
      <div className="font-[Teko] absolute top-0 gap-4 left-0 w-full flex flex-col justify-center items-center" >
        <h1 className="text-7xl max-[1200px]:text-6xl max-sm:text-4xl font-semibold text-secondary-color mt-8 text-center" >BEST BIKES FOR YOU</h1>
        <p className="text-xl max-[1200px]:text-lg max-sm:text-base max-sm:max-w-xs max-w-md text-center font-light leading-6" >Lorem ipsum dolor sit amet elit. Neque totam nostrum, odio fugit ipsum recusandae eaque animi autem beatae magnam, delectus temporibus?</p>
        <Button text="BUY NOW" />
      </div>

    </div>
  )
}

function XAnimation() {
  return (
    <div className="flex justify-center pt-10 max-[1200px]:pt-28 max-[960px]:pt-40 items-center gap-4 text-secondary-color_4 relative" >
      <span className="text-[3rem] max-[1200px]:text-[2rem] max-[960px]:text-[1rem] max-sm:text-[0.4rem] font-bold scale_ani_4" >x</span>
      <span className="text-[10rem] max-[1200px]:text-[8rem] max-[960px]:text-[5rem] max-sm:text-[2rem] font-bold scale_ani_3" >x</span>
      <span className="text-[20rem] max-[1200px]:text-[15rem] max-[960px]:text-[10rem] max-sm:text-[4rem] font-bold scale_ani_2" >x</span>
      <span className="text-[32rem] max-[1200px]:text-[25rem] max-[960px]:text-[15rem] max-sm:text-[8rem] font-bold scale_ani_1" >x</span>
      <span className="text-[20rem] max-[1200px]:text-[15rem] max-[960px]:text-[10rem] max-sm:text-[4rem] font-bold scale_ani_2" >x</span>
      <span className="text-[10rem] max-[1200px]:text-[8rem] max-[960px]:text-[5rem] max-sm:text-[2rem] font-bold scale_ani_3" >x</span>
      <span className="text-[3rem] max-[1200px]:text-[2rem] max-[960px]:text-[1rem] max-sm:text-[0.4rem] font-bold scale_ani_4" >x</span>
      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center" >
        <div className="max-[1200px]:pb-10 max-[960px]:pb-20 max-sm:pb-36 hero_bike_ani" >
          <img src={hero_bike} alt="hero bike image" />
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
