import React from "react";

function UserOrder() {
  const userOrdersHistory = [
    {
      orderId: "123456",
      orderDate: "2023-10-01",
    },
    {
      orderId: "789123",
      orderDate: "2023-10-01",
    },
  ];
  return (
    <>
      <div className=" w-full space-x-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🏠 Orders History</h2>
        {userOrdersHistory.map((order) => {
          return (
            <div className=" flex  justify-start items-center space-x-4">
              <label htmlFor="name">OrderId : </label>
              <p>{order.orderId}</p>
              <label htmlFor="name">Order Date : </label>
              <p>{order.orderDate}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserOrder;
