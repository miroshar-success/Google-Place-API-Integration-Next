import { AuthContext } from "@/hooks/AuthContext";
import React, { useContext } from "react";

const SignUpModal = () => {
  const { toggleLoginModal, toggleSignUpModal } = useContext(AuthContext);
  const login_modal_show = () => {
    toggleLoginModal();
    toggleSignUpModal();
  }
  return (
    <>
      <div
        className="modal signup-modal"
        id="user-signup"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-close-btn" data-bs-dismiss="modal" />
            <div className="modal-header">
              <img src="/assets/img/home1/login-modal-header-img.jpg" alt="Sign Up" />
            </div>
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Sign Up to Join</h2>
                  <p>Create your account to enjoy all features!</p>
                </div>
                <form>
                  <div className="form-inner mb-20">
                    <label className='label p-2'>
                      <span className='text-base label-text'>Email address</span>
                    </label>
                    <input type="email" placeholder="Enter your email address *" className="input input-bordered" />
                  </div>
                  <div className="form-inner mb-20">
                    <label className='label p-2'>
                      <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Create a password *" className="input input-bordered" />
                  </div>
                  <div className="form-inner mb-20">
                    <label className='label p-2'>
                      <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm your password *" className="input input-bordered" />
                  </div>
                  <div>
                    <button type="button" className="login-btn mb-25">Sign Up</button>
                  </div>
                  <a href='#'  data-bs-toggle="modal" data-bs-target="#user-login" className="login-link" onClick={login_modal_show}>
                    Already have an account? Sign in
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

export default SignUpModal;
