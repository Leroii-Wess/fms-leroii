import { FC } from "react";
import DashboardTable from "../features/dashboard/DashboardTable";
import DashboardStats from "../features/dashboard/DashboardStats";
import ApexLineChart from "../features/dashboard/ApexLineChart";

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <DashboardStats />
      <ApexLineChart />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
