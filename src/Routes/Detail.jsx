import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../Styles/detail.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  const { id } = useParams();
  const endpoint = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(()=>{
    axios(endpoint).then((res)=>{
      setDentist(res.data)
    })
  },[endpoint])
  
  return (
    <main className="detail-main">
      <h1 className="main-title">Detail Dentist</h1>
      <img className='detail-img'src="../../public/images/doctor.jpeg"/>
      <p className="detail-text">{dentist.name}</p>
      <p className="detail-text">{dentist.email}</p>
      <p className="detail-text">{dentist.phone}</p>
      <p className="detail-text">{dentist.website}</p>
    </main>
  )
}

export default Detail