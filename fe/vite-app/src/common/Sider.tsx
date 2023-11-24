import React from "react";

export const Sider = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  return (
    <div className="w-[350px] h-[94vh] bg-green-500 p-5">
      <div>
        {user.data.plan === "freemo" ? (
          <button className="rounded-md px-5 py-2 bg-purple-500 text-white">
            Upgrade
          </button>
        ) : user.data.plan === "bromo" ? (
          <button className="rounded-md px-5 py-2 bg-purple-500 text-white">
            bromo
          </button>
        ) : (
          <div>premo</div>
        )}
      </div>
    </div>
  );
};
