import React from "react";

const Addresses = (props: { addresses: any }) => {
  return (
    <div className="card" style={{ marginBottom: "25px" }}>
      <div className="card-header">
        <div className="card-header-title">
          آدرس ها
    </div>
      </div>
      <div className="card-content">
        <table className="table is-fullwidth">
          <tr>
            <th className="has-text-right">#</th>
            <th className="has-text-right">آدرس</th>
          </tr>
          {
            props.addresses.map((address, index) => {
              return (
                <tr>
                  <td className="has-text-right">{index + 1}</td>
                  <td className="has-text-right">{address}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Addresses;
