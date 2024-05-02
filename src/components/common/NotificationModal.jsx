import { AuthContext } from "@/hooks/AuthContext";
import React, { useContext } from "react";

const NotificationModal = () => {
  const { toggleNotificationModal } = useContext(AuthContext);
  return (
    <>
      <div
        className="modal notification-modal"
        id="notification"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header relative">
              {/* <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" /> */}
              <span
                className="modal-close-box"
                onClick={toggleNotificationModal}
              >
                &times;
              </span>
            </div>
            <div className="modal-body">
              <div className="login-registration-form">
                <div className="form-title">
                  <h2>Notification</h2>
                </div>
                <div className="content">
                  <div className="notification-item">
                    <div className="type">Itinerary Update</div>
                    <div className="message">
                      You have been removed from Itinerary Amazing Adventure in
                      New Zealand
                    </div>
                    <div className="timestamp">2021.10.12</div>
                  </div>
                  <div className="notification-item markAsRead">
                    <div className="type">Itinerary Update</div>
                    <div className="message">
                      You have been removed from Itinerary Amazing Adventure in
                      New Zealand
                    </div>
                    <div className="timestamp">2021.10.12</div>
                  </div>
                  <div className="notification-item">
                    <div className="type">Itinerary Update</div>
                    <div className="message">
                      You have been removed from Itinerary Amazing Adventure in
                      New Zealand
                    </div>
                    <div className="timestamp">2021.10.12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;
