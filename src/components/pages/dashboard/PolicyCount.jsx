import React from "react";

function PolicyCount({ when, count }) {
  return (
    <div className="flex w-[100%] bg-[#eff3f6] px-3 py-2 rounded-lg gap-8 text-sm justify-between">
      <p>{when}</p>
      <p>{count}</p>
    </div>
  );
}

export default PolicyCount;
