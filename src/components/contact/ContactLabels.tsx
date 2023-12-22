import { contactLabels } from "../../data"


const ContactLabels = () => {
    return (
        <div className="py-4 w-full max-w-6xl mx-auto" >
            <div className="flex items-center justify-around gap-6 py-14 max-[900px]:flex-col px-4" >
                {
                    contactLabels.map((cL) => (
                        <ContactLabelCard key={cL.name} name={cL.name} info1={cL.info1} info2={cL.info2} icon={cL.icon} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactLabels

interface ContactLabelCardType {
    name: string,
    info1: string,
    info2: string,
    icon: string
}

const ContactLabelCard = ({ name, info1, info2, icon }: ContactLabelCardType) => {
    return (
        <div className="flex-1 w-full flex items-center justify-between py-3 h-24 font-[Teko] bg-white shadow-md" >
            <div className="flex flex-col items-center justify-center gap-2 px-8 border-r border-secondary-color_3" >
                <div className="w-8" >
                    <img src={icon} alt={name} />
                </div>
                <span className="font-semibold text-base" >{name.toUpperCase()}</span>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center text-sm " >
                <p className="cursor-pointer hover:text-primary-color duration-200 transition-all" >{info1}</p>
                <p className="cursor-pointer hover:text-primary-color duration-200 transition-all" >{info2}</p>
            </div>
        </div>
    )
}
