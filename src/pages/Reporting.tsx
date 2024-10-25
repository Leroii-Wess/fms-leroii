import { FC } from "react";
import { FiPlus } from "react-icons/fi";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";
import ReportTable from "../features/reporting/ReportTable";

const Reporting: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Reporting</h1>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <PrimaryButton>Schedule Report</PrimaryButton>
          <OutlineButton>Export As</OutlineButton>
        </div>

        <PrimaryButton>
          <FiPlus />
          Add to Report
        </PrimaryButton>
      </div>

      <ReportTable />
    </div>
  );
};

export default Reporting;
