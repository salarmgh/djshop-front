import React from "react";

const CheckoutProcess = (props: { step: number }) => {
  const progress = [
    <React.Fragment>
      <div className="step-marker">
        <span className="icon">
          <i className="fa fa-shopping-cart"></i>
        </span>
      </div>
      <div className="step-details">
        <p className="step-title">سبد خرید</p>
      </div>
    </React.Fragment>,
    <React.Fragment>
      <div className="step-marker">
        <span className="icon">
          <i className="fa fa-map-marker-alt"></i>
        </span>
      </div>
      <div className="step-details">
        <p className="step-title">انتخاب آدرس</p>
      </div>
    </React.Fragment>,
    <React.Fragment>
      <div className="step-marker">
        <span className="icon">
          <i className="fa fa-shipping-fast"></i>
        </span>
      </div>
      <div className="step-details">
        <p className="step-title">نحوه ارسال</p>
      </div>
    </React.Fragment>,
    <React.Fragment>
      <div className="step-marker">
        <span className="icon">
          <i className="fa fa-money-bill-wave"></i>
        </span>
      </div>
      <div className="step-details">
        <p className="step-title">پرداخت</p>
      </div>
    </React.Fragment>
  ]
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="steps is-medium" style={{ direction: "ltr" }}>
        {
          progress.map((item, index) => {
            return (
              <div className={`step-item ${index <= props.step ? "is-active" : ""}`} >
                {item}
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default CheckoutProcess;
