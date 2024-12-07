import { useState } from "react";
import { useContextGlobal } from '../Context/Context'

const Form = () => {

  const { state } = useContextGlobal()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    

    let regexName = /^(?!\s).{5,}$/;
    let regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      regexName.test(name) &&
      regexEmail.test(email)
    ){
      console.log(`Data processed successfully. Name: ${name}, Email: ${email}`);
      setErr(false)
      setSuccess(true)
    }else{
      setErr(true)
    }
  };
  return (
    <div className="form-container">
     <form onSubmit={handleSubmit}>
        <div className="form-label">
          <label className={`${state.darkTheme ? 'label-dark' : 'label-light'}`}>Full name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-label">
          <label className={`${state.darkTheme ? 'label-dark' : 'label-light'}`}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className={`${state.darkTheme ? 'btn-dark' : 'btn-light'} form-btn`} type="submit">Send</button>
      </form>
    {err ? (<h4 className={`${state.darkTheme ? 'text-dark' : 'text-light'} form-mssg`}>Please verify your data</h4>) : null}
    {success ? (<h4 className={`${state.darkTheme ? 'text-dark' : 'text-light'} form-mssg`}>{`Thank you ${name}, we will contact you as soon as posible via email`}</h4>) : null}
    </div>
  );
};

export default Form;
