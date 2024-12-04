import { useState } from "react";

const Form = () => {
 
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
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    {err ? (<h4>Please verify your data</h4>) : null}
    {success ? (<h4>{`Thank you ${name}, we will contact you as soon as posible via email`}</h4>) : null}
    </>
  );
};

export default Form;
