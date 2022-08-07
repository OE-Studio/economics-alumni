import React from 'react'
import emptyState from "../../../assets/dashboard-assets/history_toggle_off.svg";

const EmptyField = () => {
    return (
      <div className="w-full h-full flex items-center justify-center flex-col space-y-4 my-20">
        <img src={emptyState} alt="" />
        <p className="text-lg font-medium text-gray-300">No recent uploads</p>
      </div>
    );
  };

export default EmptyField