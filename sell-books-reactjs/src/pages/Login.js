import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
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
                  <div className="text-center pb-2">
                   Nếu bạn chưa có tài khoản,đăng ký
                    <a className="btn-link-style" href="./">
                      tại đây
                    </a>
                  </div>
                  <form action="" method="" onSubmit={submitLoginHandler}>                
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="UserName"
                      />
                    </div>                 
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className='mb-3 d-flex justify-content-between align-items-center'>
                        <div className='form-login_remember d-flex'>
                           <input type='checkbox'/>
                           <label htmlFor=''>Remember me</label> 

                        </div>
                        <Link className="nav-link link-black-100" to='/'><u>Forgot Password?</u></Link>

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