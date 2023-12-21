import { typesOfBike } from "../../data"


const Bike = () => {
    return (
        <div className="w-full space-y-4 mb-16" >
            <h4 className="text-2xl font-medium pb-4 border-b border-secondary-color_3 font-[Teko]" >Bikes</h4>
            <div className="space-y-2 text-base font-medium" >
                {
                    typesOfBike.map((bike) => (
                        <CheckBox key={bike.id} id={bike.id} name={bike.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Bike

export const CheckBox = ({id, name}:{id:string, name:string}) => {
    return (
        <div>
            <label className="material-checkbox" htmlFor={id}>
                <input type="checkbox" id={id} />
                <span className="checkmark"></span>
                {name}
            </label>
        </div>
    )
}
