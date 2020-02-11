import React from "react"

const AddressList = (props: { setCurrentAddress: any, addresses: { id: number, location: string, user: number }[] }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="is-right card-header-title">
          آدرس ها
                </div>
      </div>
      <div className="card-content">
        {
          props.addresses.map((address, index) => {
            return (
              <React.Fragment>
                <input onClick={(event) => {
                  props.setCurrentAddress(parseInt(event.target["dataset"].id));
                }}
                  className="is-checkradio is-rtl" type="radio" name="address" key={index} data-id={address.id} id={`input${index}`} />
                <label htmlFor={`input${index}`}>{address.location}</label>
                <div className="is-divider"></div>
              </React.Fragment>
            )
          })
        }
      </div>
    </div >
  )
}

export default AddressList;
