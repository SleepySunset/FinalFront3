import Form from '../Components/Form'
import '../Styles/contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <main className='contact-name'>
      <h1 className='contact-title'>Want to know more?</h1>
      <p className='contact-text'>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact