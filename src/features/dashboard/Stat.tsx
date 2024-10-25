// import clsx from "clsx";
import { FC } from "react";

/* Define the props for the Stat component */
interface StatProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: "red" | "green" | "blue" | "yellow";
}

const Stat: FC<StatProps> = ({ icon, title, value, color }) => {
  console.log(color);

  const bgColorClass = {
    red: "bg-red-100",
    green: "bg-green-100",
    blue: "bg-blue-100",
    yellow: "bg-yellow-100",
  }[color];

  const textColorClass = {
    red: "text-red-700",
    green: "text-green-700",
    blue: "text-blue-700",
    yellow: "text-yellow-700",
  }[color];

  return (
    <div className="bg-white border rounded-3xl p-4 grid  grid-rows-[auto_auto] ">
      <div className="flex justify-between px-5 py-4">
        <div className="flex flex-col justify-between">
          <div className="text-xl text-gray-600">{title}</div>
          <div className={`text-4xl font-bold text-gray-800`}>{value}</div>
        </div>
        <div
          className={`${bgColorClass} ${textColorClass}
            p-4 w-20 h-20 flex items-center justify-center rounded-3xl text-4xl`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Stat;

{
  /* <div
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center bg-${color}-100`}
      >
        <div className={`w-8 h-8 text-${color}-700`}>{icon}</div>
      </div>
      <h5 className="self-end text-xs uppercase tracking-wide font-semibold text-gray-500">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none">{value}</p> */
}
