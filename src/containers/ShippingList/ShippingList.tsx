import React from "react"

const ShippingList = (props: { setCurrentShippingMethod: any, shippingMethods: { id: number, method: string }[] }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="is-right card-header-title">
          نحوه ارسال
                </div>
      </div>
      <div className="card-content">
        {
          props.shippingMethods.map((shippingMethod, index) => {
            return (
              <React.Fragment>
                <input onClick={(event) => {
                  props.setCurrentShippingMethod(parseInt(event.target["dataset"].id));
                }}
                  className="is-checkradio is-rtl" type="radio" name="address" key={index} data-id={shippingMethod.id} id={`input${index}`} />
                <label htmlFor={`input${index}`}>{shippingMethod.method}</label>
                <div className="is-divider"></div>
              </React.Fragment>
            )
          })
        }
      </div>
    </div >
  )
}

export default ShippingList;
