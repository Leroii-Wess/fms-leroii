import { FC } from "react";
import Stats from "./Stats";

const DashboardStats: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      <Stats />
    </div>
  );
};

export default DashboardStats;
