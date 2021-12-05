import React, { useCallback, useState } from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ? '' : 'Invalid email';
};

const validatePassword = password => {
  if(password.length < 8) return 'Need at least 8 chars';
  return '';
}

const LoginForm = ({Login}) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  })
  const Logout = () => {
    setValues({email:"", password: ""});
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('values ==', values);
    Login(values);
   
  };
  
  const handleOnChange = evt => {
    setValues({ ...values, [evt.target.name]: evt.target.value })
  }
  
  const handleOnBlur = evt => {
    setTouched({
      ...touched,
      [evt.target.name]: true
    })
  }
  
  const errorEmail = validateEmail(values.email);
  const errorPassword = validatePassword(values.password);
  
  const formValid = !errorEmail && !errorPassword;
  
  return (
    <div style={ { margin: 20} }>
      <form onSubmit={ handleSubmit }>
        <input
          style={{ margin: 20, display: 'block'}}
          placeholder="Email"
          value = { values.email }
          onChange = { handleOnChange }
          onBlur={ handleOnBlur }
          name = "email"
        />
        { touched.email && <div style={ { color: 'red' } }>{ errorEmail }</div> }
        <input
          style={{ margin: 20,  display: 'block'}}
          type="password"
          placeholder="Password"
          value = { values.password }
          onChange = { handleOnChange }
          onBlur={ handleOnBlur }
          name = "password"
        />
        { touched.password && <div style={ { color: 'red' } }>{ errorPassword }</div> }
        <button
          style={{ margin: 20,  display: 'block'}}
          type="submit"
          disabled={ !formValid }
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
