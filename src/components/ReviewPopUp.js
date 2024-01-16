import React from "react";
import "./PopUp.css";
import PopUpContent from "./PopUpContent";

function ReviewPopUp(props) {
  if (!props.open) {
    return null;
  }

  return (
    <div className="overlayPop">
      <div>
        <PopUpContent close={props.close} />
      </div>
    </div>
  );
}

export default ReviewPopUp;
