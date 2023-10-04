import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css';


function Form() {

  const [data, setdata] = useState({
    name: "",
    username: "",
    email: "",
    mobile: ""
  })

  const [error, setError] = useState()

  //For handling change______________________________________________________________________________________

  const handleChange = (e) => {

    if (e.target.name === 'mobile') {
      const sanitizedNumber = e.target.value.replace(/[^\d]/g, '');
      setdata({ ...data, [e.target.name]: sanitizedNumber });
    }
    else {
      setdata({ ...data, [e.target.name]: e.target.value });
    }
  }

  const redirectTo = useNavigate();



  //Handling Submissions and errors _________________________________________________________________________

  const handleSubmit = () => {
    const NameRegex = /^[A-Za-z ]{3,}$/;

    const UserNameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,10}$/;

    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const NumberRegex = /^[0-9]{10}$/;

    const ValidationErrors = {}

    if (!NameRegex.test(data.name)) {
      ValidationErrors.name = "Required Field Must Contain Alphabets and Minimum of 5 Letters"

    }
    if (!UserNameRegex.test(data.username)) {
      ValidationErrors.username = "Required Field Must be a Combination of Alphabets and Digits Between 6 to 10 letters"

    }
    if (!EmailRegex.test(data.email)) {
      ValidationErrors.email = "Required Field Email Format Invalid"

    }
    if (!NumberRegex.test(data.mobile)) {
      ValidationErrors.number = "Required Field Number should be of 10 digits"

    }
    if (!document.getElementById('checkbox').checked) {
      ValidationErrors.checker = "Check this box if you want to proceed and explore"
    }



    setError(ValidationErrors);
    if (Object.keys(ValidationErrors).length === 0) {
      localStorage.setItem('formData', JSON.stringify(data));

      setdata({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checker: ""

      });
    }
  }



  return (
    <div className='RegisterationForm'>
      <h1 id='title'>Super app</h1>
      <p className='createtitle'>Create your new account</p>

      <input class='data' type='text' placeholder='Name' name='name' value={data.name} onChange={handleChange} />

      {error && <div className="error">{error.name}</div>}

      <input class='data' type='text' placeholder='UserName' name='username' value={data.username} onChange={handleChange} maxLength={10} />
      {error && <div className="error">{error.username}</div>}

      <input class='data' type='email' placeholder='Email' name='email' value={data.email} onChange={handleChange} />

      {error && <div className="error">{error.email}</div>}

      <input class='data' type='text' placeholder='Mobile' name='mobile' value={data.mobile} onChange={handleChange} maxLength={10} />

      {error && <div className="error">{error.mobile}</div>}

      <div id='checkbox1'><input type='checkbox' id='checkbox'></input>
      <label for='checkbox2'>Share my Registration Data with Superapp</label></div>

      {error && <div className="error">{error.checker}</div>}
      <button id='btn' onClick={handleSubmit}>SIGN UP</button>
      
      <p className='terms'>By clicking on Sign up, you agree to Superapp <span class='green'>Terms and Conditions of Use</span>.</p>
      <p className='terms'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span class='green'> Privacy Policy</span>.</p>
    
    
    </div>
  )
}

export default Form;


