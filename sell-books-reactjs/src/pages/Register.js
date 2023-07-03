import React from "react";
import "../assets/css/register.css";

const Register = () => {
  const submitLoginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3">
            <div className="row">
              <div className="page-login">
                <h1 className="text-center fs-3">ĐĂNG KÝ</h1>
                <div className="text-center pb-2">
                  Đã có tài khoản đăng nhập,
                  <a className="btn-link-style" href="./">
                    tại đây
                  </a>
                </div>
                <form action="" method="" onSubmit={submitLoginHandler}>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Họ" />
                  </div>
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Tên"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div class="btn-register">
                    <button type="button" class="btn btn-login">
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
