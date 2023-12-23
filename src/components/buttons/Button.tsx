

const Button = ({text}:{text:string}) => {
    return (
        <button className="btn hover:shadow-lg duration-200 transition-all text-xl mt-4 border-2 tracking-wider font-normal border-primary-color relative" >{text}</button>
    )
}

export default Button
