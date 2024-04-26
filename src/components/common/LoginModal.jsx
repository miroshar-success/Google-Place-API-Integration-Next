  import { useAuth } from "@/hooks/AuthContext";
  import React from "react";

  const LoginModal = () => {
  
    return (
      <>
        <div
          className="modal login-modal"
          id="user-login"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-clode-btn" data-bs-dismiss="modal" />
              <div className="modal-header">
                <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" />
              </div>
              <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>Sign in to continue</h2>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <label className='label p-2'>
                        <span className='text-base label-text'>Email address</span>
                      </label>
                      <input type="text" placeholder="Enter your registered Email *" />
                    </div>
                    <div className="form-inner mb-20">
                      <label className='label p-2'>
                      <span className='text-base label-text'>Password</span>
                      </label>
                      <input type="password" placeholder='Enter your password *' />
                    </div>
                    <div>
                      <button type="button" className="login-btn mb-25">Login</button>
                    </div>
                    <a  className="login-link" >
                      {"Don't"} have an account?
                    </a>
                    <a href='/register' className="login-link" >
                      Forgot your password ?
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default LoginModal;
