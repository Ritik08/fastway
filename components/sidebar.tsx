import React from "react";

const Sidebar = () => {
  return (
    <>
      <h1 className="text-xl my-3 text-white">Traders Book</h1>
      <ul className="list-none text-white">
        <hr />
        <li className="p-1 md:p-3">Dashboard</li>
        <li className="p-1 md:p-3">Asset</li>
        <li className="p-1 md:p-3">Transaction Hall</li>
        <li className="p-1 md:p-3">Personal Info</li>
        <li className="p-1 md:p-3">Kyc</li>
        <li className="p-1 md:p-3">My Team</li>
        <li className="p-1 md:p-3">Settings</li>
        <hr />
        <li className="p-3">Logout</li>
      </ul>
    </>
  );
};

export default Sidebar;
