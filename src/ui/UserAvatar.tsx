// import React from "react";
import avatar from "../assets/default-avatar.jpg";

function UserAvatar() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <img
        src={avatar}
        alt="avatar"
        className="w-16 object-cover object-center rounded-full border"
      />

      <div className="flex flex-col">
        <span className="text-lg font-bold">John Doe</span>
        <span className="text-lg">Super User</span>
      </div>
    </div>
  );
}

export default UserAvatar;
