import { AuthContext } from "@/hooks/AuthContext";
  import React, { useContext } from "react";

  const LoginModal = () => {
    const { showModal, toggleLoginModal } = useContext(AuthContext);
    return (
      <>
        <div
          className="modal login-modal block opacity-100"
          id="user-login"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header relative">
                <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" />
                <span className="absolute top-[10px] right-[10px] w-[20px] h-[20px] bg-white rounded-full text-black flex justify-center items-center text-[20px] cursor-pointer" onClick={toggleLoginModal}>&times;</span>
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
