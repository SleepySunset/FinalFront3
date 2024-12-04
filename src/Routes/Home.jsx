import axios from 'axios'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [users, setUsers] = useState([])
  const endpoint = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(()=>{
    axios(endpoint).then((res)=> {
      console.log(res.data)
      setUsers(res.data)
    })
  },[]) 
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} name={user.name} username={user.username} id={user.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home