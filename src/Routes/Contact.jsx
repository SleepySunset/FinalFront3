import Form from '../Components/Form'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextGlobal()
  return (
    <main className={`${state.darkTheme ? 'main-dark' : 'main-light'} main-contact`}>
      <h1 className={`${state.darkTheme ? 'title-dark' : 'title-light'} contact-title`}>Want to know more?</h1>
      <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} contact-text`}>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact