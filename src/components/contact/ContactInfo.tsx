import contactImg from "../../assets/images/contact.jfif"

const ContactInfo = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4" >
            <div className="flex items-center justify-center" >
                <div className="flex-1 max-md:hidden" >
                    <div className="w-full" >
                        <img src={contactImg} alt="contact image" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between py-4" >
                    <div className="space-y-4 font-[Teko]" >
                        <h2 className=" text-4xl font-bold text-secondary-color max-md:text-center max-md:text-3xl max-sm:text-2xl" >CONTACT INFORMATION</h2>
                        <div className="space-y-2 text-secondary-color_3 text-lg max-sm:text-sm" >
                            <p className="max-md:text-center" >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit totam rem aperiam, eaque sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
                            <p className="max-md:text-center" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim Nor again is there anyone who loves or pursues or desires to obtain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
