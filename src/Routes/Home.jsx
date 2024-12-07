import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'

const Home = () => {
  const { state } = useContextGlobal()

  return (
    <main className={state.darkTheme ? "main-dark" : "main-light"}>
      <h1 className={`${state.darkTheme ? 'title-dark' : 'title-light'} main-title`}>Our dentists</h1>
      <div className='card-grid'>
        {state.dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </main>
  )
}

export default Home