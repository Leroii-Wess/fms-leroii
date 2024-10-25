import { FC } from "react";
import MainNav from "./MainNav";

const Sidebar: FC = () => {
  return (
    <div className="bg-customBlue  py-8 px-10 flex flex-col gap-12 row-span-full ">
      <div className="flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">FMS</h1>
      </div>
      <MainNav />
    </div>
  );
};

export default Sidebar;
