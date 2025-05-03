import React, { useState } from "react";
import UserAddress from "../../components/UserAddress";
import UserOrder from "../../components/UserOrder";
import UserSetting from "../../components/UserProfileSetting";
import UserProfile from "../../components/UserProfile";
import { useParams } from "react-router";

function UserProfiles() {
  const param = useParams();
  const [page, setPage] = useState("user-profile");

  return (
    <>
      <div className=" grid grid-cols-5 gap-4 p-4">
        <div className=" col-span-1 bg-red-500 p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center">
            <img src="" alt="" />
            <h1>User Name</h1>
            <h2>User Email</h2>
          </div>
          <div>
            <nav>
              <ul className="flex flex-col items-start justify-start space-y-2">
                <button onClick={() => setPage("user-profile")}>Profile</button>
                <button onClick={() => setPage("user-address")}>Address</button>
                <button onClick={() => setPage("user-orders")}>Orders</button>
                <button onClick={() => setPage("user-setting")}>Setting</button>
              </ul>
            </nav>
          </div>
        </div>

        {/*  */}
        <div className=" col-span-4">
          {page == "user-profile" && <UserProfile />}
          {page == "user-address" && <UserAddress />}
          {page == "user-orders" && <UserOrder />}
          {page == "user-setting" && <UserSetting />}
        </div>
      </div>
    </>
  );
}

export default UserProfiles;
