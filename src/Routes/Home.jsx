import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'
import '../Styles/home.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useContextGlobal()

  return (
    <main>
      <h1 className="main-title">Our dentists</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home