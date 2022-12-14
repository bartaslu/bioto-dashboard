import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'
import "./login.scss"

const Login = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className='login_popup'>
      <div className="box">
        <div className="form">
          <h2>LOG IN</h2>
          <div className="input_box">
            <input type="text" placeholder='' required="required"/>
            <span class="inside">Username</span>
            <i></i>
          </div>
          <div className="input_box">
            <input type="password" required="required"/>
            <span>Password</span>
            <i></i>
          </div>
          <span class="reset_pass"><a href='cia turi buti linkas'>Forgot Password?</a></span>
          <button className='btn_login'>Login</button>
          <span>Don't have an account? <a href='cia turi buti href'>Register here!</a></span>
        </div>  
      </div>
    </div>
  )
}

export default Login