import { useSearchParams } from "react-router-dom";
import { FC } from "react";

interface Option {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface FilterProps {
  filterField: string;
  options: Option[];
}

const Filter: FC<FilterProps> = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    // if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-gray-50 shadow-md rounded-2xl p-8 flex gap-2 items-center justify-around w-4/5 m-auto">
      {options?.map((option) => (
        <button
          key={option.label}
          onClick={() => handleClick(option.value)}
          className={`px-8 py-5 font-medium text-[1.4rem] rounded-2xl transition duration-300 border flex gap-2 items-center shadow-md ${
            option.value === currentFilter
              ? "bg-blue-600 text-white"
              : "bg-white text-black hover:bg-blue-600 hover:text-white"
          }`}
          disabled={option.value === currentFilter}
        >
          {option.icon} {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
