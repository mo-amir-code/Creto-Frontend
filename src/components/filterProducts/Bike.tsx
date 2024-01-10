import { useSearchParams } from "react-router-dom"
import { typesOfBike } from "../../data"
import { useEffect, useRef } from "react"


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

export const CheckBox = ({ id, name }: { id: string, name: string }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleLabel = (e: any) => {
        let values = searchParams.getAll('categories') || [];
        const categoryToAdd = name.split(' ')[0].toLowerCase();
      
        if (e.target.checked) {
          // Add category only if it doesn't already exist
          if (!values.includes(categoryToAdd)) {
            values.push(categoryToAdd);
            searchParams.delete('categories'); 
            values.forEach((val) => searchParams.append('categories', val));
          }
        } else {
          values = values.filter(v => v !== categoryToAdd);
          if (values.length === 0) {
            searchParams.delete('categories'); 
          } else {
            searchParams.delete('categories'); 
            values.forEach((val) => searchParams.append('categories', val));
          }
        }
        searchParams.set("page", '1');
        setSearchParams(searchParams);
    };
    
    useEffect(() => {
      const values = searchParams.getAll('categories');
      if(values && values.includes(name.split(' ')[0].toLowerCase())){
        if(checkboxRef.current){
          checkboxRef.current.checked = true;
        }
      }
    }, [])

    return (
        <div>
            <label className="material-checkbox" htmlFor={id}>
                <input ref={checkboxRef} onClick={handleLabel} type="checkbox" id={id} />
                <span className="checkmark"></span>
                {name}
            </label>
        </div>
    )
}
