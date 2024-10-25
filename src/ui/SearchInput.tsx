import { FC, useState } from "react";

interface SearchInputProps {
  width?: string; // Optional width prop
}

const SearchInput: FC<SearchInputProps> = ({ width = "33%" }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <input
      className={`${width} w-1/3 px-8 py-1 placeholder:text-xl bg-gray-100 rounded-full border focus:border-blue-600 outline-none`}
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
