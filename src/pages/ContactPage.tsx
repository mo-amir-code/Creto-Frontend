import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import ContactLabels from "../components/contact/ContactLabels"
import PageScreen from "../components/pageScreen"


const ContactPage = () => {
  return (
    <div className="w-full space-y-8" >
        <PageScreen />   
        <ContactInfo/>   
        <ContactLabels />
        <ContactForm />
    </div>
  )
}

export default ContactPage
