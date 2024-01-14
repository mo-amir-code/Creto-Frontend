import Form from "./Form"
import SelectAddress from "./SelectAddress"


const FormArea = () => {
    return (
        <div className="flex-[0.65] w-full mx-2 max-md:mx-0 py-2 space-y-4" >
            <div className="space-y-8" >
                {/* add address */}
                <div className="space-y-2 px-6 py-6 rounded-lg shadow-lg" >
                    <h2 className="text-3xl font-[Teko] font-semibold" >Address</h2>
                    <Form />
                </div>

                {/* Select Address */}
                <div className="space-y-2 px-6 py-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-[Teko] font-semibold" >Select Address</h2>
                    <SelectAddress />
                </div>
            </div>
        </div>
    )
}

export default FormArea
