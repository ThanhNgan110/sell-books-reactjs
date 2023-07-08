import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const handleInputChange = () => {

  }
    const submitLoginHandler = (e) => {
      e.preventDefault();
    };
    return (
      <>
        <div className="container">
          <div className="row">
         
            <div className="col-xl-4 col-md-6 col-sm-12 col-sx-12 mx-auto">
             
                <div className="page-register">
                  <h1 className="text-center fs-3">Login</h1>
                  <div className="text-center mb-3">
                   Nếu bạn chưa có tài khoản,đăng ký
                    <Link className="btn-link-style" to="../register">
                      tại đây
                    </Link>
                  </div>
                  <form action="" method="" onSubmit={submitLoginHandler}>                
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="UserName"
                        onChange={handleInputChange}
                      
                      />
                    </div>                 
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='mb-3 d-flex justify-content-between align-items-center'>
                        <div className='form-login_remember d-flex'>
                           <input type='checkbox'/>
                           <label htmlFor=''>Remember me</label> 

                        </div>
                        <Link className="nav-link link-black-100" to='../forgotPassword' ><u>Forgot Password?</u></Link>

                    </div>
                    <div class="btn-login">
                      <button type="button" class="btn btn-block btn-dark">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      
      </>
    );
  };
  

export default Login