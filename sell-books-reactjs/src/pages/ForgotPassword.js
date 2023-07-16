import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


const ForgotPassword = () => {
  return (
    <>
           <div className="container">
          <div className="row">
         
            <div className="col-xl-4 col-md-6 col-sm-12 col-sx-12 mx-auto">
             
                <div className="page-register">
                  <h1 className="text-center fs-3">ForgotPassword</h1>
                  <div className="text-center mb-3">
                   Mật khẩu mới sẽ được gởi về email của bạn                  
                  </div>
                  <form action="" method="" onSubmit=''>                
                                    
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="creativelayers088@gmail.com"
                      />
                    </div>                    
                    <div class="btn-login mb-3">
                      <button type="button" class="btn btn-block btn-dark">
                        Recover Password
                      </button>
                    </div>
                  </form>
                  <div className='mb-3 text-center'>
                    <span className=' small text-muted'>Remember your password?<Link className="nav-link link-red-100" to='../login'>Login</Link></span>
                       
                    </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  )
}

export default ForgotPassword