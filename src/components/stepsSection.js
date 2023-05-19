import React, { useState } from "react";
import "../App.css";
import download_image from "../images/download_mobile.webp";

const StepSection = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <div className="freq_main px-0" >
        <div className="steps_inner">
          <div className="q_left justify-content-start flex-column">
            <h4 className="mt-2 mb-3">Download Any Plateform Videos</h4>
            <img src={download_image} alt="pic" className="step_image"></img>
          </div>
          <div className="q_right me-3 p-0">
              <div className="step d-flex">
                <div className="step_left">
                <div className="left_icon_div">
                <i class="fa-solid fa-copy"></i>
                </div>
                </div>
                <div className="step_right">
                  <h6 className="mb-2">Step 1</h6>
                  <div className="step_right_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal
                  </div>
                </div>
            </div>
            <div className="step2 d-flex">
                <div className="step_left">
                <div className="left_icon_div">
                <i class="fa-solid fa-paste"></i>
                </div>
                </div>
                <div className="step_right">
                  <h6 className="mb-2">Step 2</h6>
                  <div className="step_right_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal
                  </div>
                </div>
            </div>
            <div className="step3 d-flex">
                <div className="step_left">
                <div className="left_icon_div">
                <i class="fa-solid fa-circle-down"></i>
                </div>
                </div>
                <div className="step_right">
                  <h6 className="mb-2">Step 3</h6>
                  <div className="step_right_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSection;
