import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container login">
        <div className='row'>
            <div className='col-md-7 col-sm-12'>
                <img className="w-100" src="loginpic.jpg" alt="disaster recovery" width="100%" height="790"/>
            </div>

            <div className='col-md-5 col-sm-12 me-0 login'>
                <div className='form row justify-content-center align-items-center ps-5'>
                    <div className="p-5">
                        <div className="col-md-12 col-sm-12 text-center p-5">
                            <img src="logo.png" alt="company logo" width='50%' className="mb-4"></img>
                            <h6>Enter the login details</h6>
                        </div>
                        <form>
                            <div className='form-group mb-2'>
                                <input type="email" name="email" className="form-control col-md-12 border border-dark rounded-0" placeholder='Enter Email'/>
                            </div>
                            <div className='form-group mb-2'>
                                <input type="password" name="password" className="form-control col-md-12 border border-dark rounded-0" placeholder='Enter Password'/>
                            </div>
                            <div className='form-check mb-2'>
                                <input type="checkbox" name="remmeberme" className="form-check-input" />
                                <label className="form-check-label ms-1"><small>Remember me</small></label>
                            </div>
                            <button type="submit" className="btn w-100 btn-outline-dark mb-2 btn-block rounded-0">LOGIN</button>
                            <div className="text-center">
                              <a href="#" className="nav-link text-danger"><i class="fa fa-lock"></i>&nbsp;<small>Forgot password</small></a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login