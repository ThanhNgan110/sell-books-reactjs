import React from "react";
import "../assets/css/register.css";
import "../index.css";

const Register = () => {
  const submitLoginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
       
          <div className="col-xl-4 col-md-6 col-sm-12 col-sx-12 mx-auto">
           
              <div className="page-register">
                <h1 className="text-center fs-3">Register</h1>
                <div className="text-center pb-2">
                  Đã có tài khoản đăng nhập,
                  <a className="btn-link-style" href="./">
                    tại đây
                  </a>
                </div>
                <form action="" method="" onSubmit={submitLoginHandler}>                
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="FullName"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="UserName"
                    />
                  </div>
                 
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Telephone"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="btn-register">
                    <button type="button" class="btn btn-block btn-dark">
                      Register
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

export default Register;
