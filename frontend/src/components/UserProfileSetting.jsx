import React from "react";

function UserProfileSetting() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      {/* Basic Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">👤 Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="date" placeholder="Date of Birth" className="input" />
        </div>
      </section>

      {/* Address Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📍 Address Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Street Address" className="input" />
          <input type="text" placeholder="City" className="input" />
          <input type="text" placeholder="State/Province" className="input" />
          <input type="text" placeholder="Zip/Postal Code" className="input" />
          <input type="text" placeholder="Country" className="input" />
        </div>
      </section>

      {/* Dining Preferences */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🍴 Dining Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Favorite Cuisine" className="input" />
          <input
            type="text"
            placeholder="Dietary Restrictions"
            className="input"
          />
          <input type="text" placeholder="Allergies" className="input" />
          <select className="input">
            <option>Table Preference</option>
            <option>Outdoor</option>
            <option>Near Window</option>
            <option>Quiet Corner</option>
          </select>
        </div>
      </section>

      {/* Security Settings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔐 Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="password" placeholder="New Password" className="input" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        </div>
      </section>

      {/* Notification Preferences */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔔 Notifications</h2>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          Receive Promotions & Offers
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" />
          SMS Notifications
        </label>
      </section>

      <button className="mt-6 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl shadow">
        Save Profile
      </button>
    </div>
  );
}

export default UserProfileSetting;
