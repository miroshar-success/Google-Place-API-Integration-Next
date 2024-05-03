import React, { useState } from "react";
import SearchForm from "@/components/GoogleSearchForm/searchForm";
import QuantityCounter from "@/uitils/QuantityCounter";

const ActivityModal = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    groupSize: 1, // Default group size
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose(); // Close modal after saving data
  };

  const handleClose = () => {
    onClose(); // Call onClose function to handle modal closing
  };

  return (
    <>
      <div
        className="modal activity-modal"
        id="activity-modal"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header relative">
              <span className="modal-close-box" onClick={handleClose}>&times;</span>
            </div>
            <div className="modal-body">
              <h4>Reserve Your Activity</h4>
              <p>
                Create your wanted Activity so other travelers can share it with
                you!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-inner mb-20">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the activity name or title"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-inner mb-20">
                  <SearchForm label={"Location"} />
                </div>
                <div className="tour-date-wrap mb-50">
                  <h6>Select Your start date:</h6>
                  <div className="form-inner mb-20">
                    <div className="form-group">
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startDate: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="tour-date-wrap mb-50">
                  <h6>Select Your end date:</h6>
                  <div className="form-inner mb-20">
                    <div className="form-group">
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="number-input-item adults">
                  <label className="number-input-lable">
                    Group Size:<span></span>
                  </label>
                  <QuantityCounter
                    value={formData.groupSize}
                    onChange={(value) =>
                      setFormData({ ...formData, groupSize: value })
                    }
                    incIcon="bx bx-plus"
                    dcrIcon="bx bx-minus"
                  />
                </div>
                <div className="form-inner mb-30">
                  <label>
                    Description <span>*</span>
                  </label>
                  <textarea
                    placeholder="Write the activity description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-inner">
                  <button type="submit" className="primary-btn1 two">
                    Create activity
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

export default ActivityModal;
