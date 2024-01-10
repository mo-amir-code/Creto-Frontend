import noData from "../assets/NoData.svg"

const NoData = ({subline}:{subline:string}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" >
        <img src={noData} alt="No data found" className="w-[70%]" />
        <h4 className="text-3xl -translate-y-20 max-lg:-translate-y-10 max-md:text-xl font-[Teko] font-bold text-secondary-color" >{subline.toUpperCase()}</h4>
    </div>
  )
}

export default NoData
