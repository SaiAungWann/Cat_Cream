import React from "react";

function UserProfile() {
  return (
    <>
      <div className=" grid grid-cols-5 gap-4 p-4">
        <div className=" col-span-2 bg-red-500 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center">
            <img src="" alt="" />
            <h1>User Name</h1>
            <h2>User Email</h2>
          </div>
          <div>
            <nav>
              <ul>
                <li>Profile</li>
                <li>Address</li>
                <li>Orders</li>
                <li>Setting</li>
              </ul>
            </nav>
          </div>
        </div>

        {/*  */}
        <div className=" col-span-3"></div>
      </div>
    </>
  );
}

export default UserProfile;
