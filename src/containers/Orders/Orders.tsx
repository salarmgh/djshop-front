import React from "react";

const Orders = (props: { orders: { status: string, id: number, price: number, date: string }[] }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          سفارش ها
                  </div>
      </div>

      <div className="card-content">
        <table className="table is-fullwidth">
          <tr>
            <th className="has-text-right">#</th>
            <th className="has-text-right">شماره سفارش</th>
            <th className="has-text-right">تاریخ سفارش</th>
            <th className="has-text-right">مبلغ سفارش</th>
            <th className="has-text-right">وضعیت</th>
          </tr>
          {
            props.orders.map((order, index) => {
              return (
                <tr>
                  <td className="has-text-right">{index + 1}</td>
                  <td className="has-text-right">{order.id}</td>
                  <td className="has-text-right">{order.date}</td>
                  <td className="has-text-right">{order.price}</td>
                  <td className="has-text-right">{order.status}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>

  )
}

export default Orders;
