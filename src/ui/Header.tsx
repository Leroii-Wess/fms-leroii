// import React from 'react'

import SearchInput from "./SearchInput";
import UserAvatar from "./UserAvatar";

function Header() {
  return (
    <div className="px-16 py-6 bg-white border-b flex  justify-between">
      <SearchInput />
      <UserAvatar />
    </div>
  );
}

export default Header;
