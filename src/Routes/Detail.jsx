import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useContextGlobal } from "../Context/Context";

const Detail = () => {
  const { state } = useContextGlobal();
  const [dentist, setDentist] = useState({})
  const { id } = useParams();
  const endpoint = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(()=>{
    axios(endpoint).then((res)=>{
      setDentist(res.data)
    })
  },[endpoint])
  
  return (
    <main className={`${state.darkTheme ? 'main-dark' : 'main-light'} detail-main`}>
      <h1 className={`${state.darkTheme ? 'title-dark' : 'title-light'} main-title`}>Detail Dentist</h1>
      <img className='detail-img'src="/images/doctor.jpeg"/>
      <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} main-text`}>{dentist.name}</p>
      <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} main-text`}>{dentist.email}</p>
      <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} main-text`}>{dentist.phone}</p>
      <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} main-text`}>{dentist.website}</p>
    </main>
  )
}

export default Detail