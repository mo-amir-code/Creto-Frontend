
const Tab = ({ tabSelected, setTabSelected }: { tabSelected: number, setTabSelected: Function }) => {
    return (
        <div className="flex items-center justify-start font-medium gap-6" >
            <span onClick={() => setTabSelected(1)} className={`h-full py-2 relative group cursor-pointer ${tabSelected !== 1 && "text-secondary-color_3"}`} >Description<span className={`absolute group-hover:block ${tabSelected === 1 ? "block" : "hidden"} nav_top_animation_in top-[100%] rounded-lg left-auto right-auto h-[3px] bg-primary-color`}>{" "}</span></span>
        </div>
    )
}

export default Tab
