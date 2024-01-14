// import { useState } from "react"
import { Address } from "../userProfile/Addresses"


const SelectAddress = () => {
    // const [selected, setSelected] = useState(0);

    return (
        <div>
            <div className="flex flex-col justify-center gap-3" >
                <Address selected={true} />
                <Address selected={false} />
                <Address selected={false} />
            </div>
        </div>
    )
}

export default SelectAddress
