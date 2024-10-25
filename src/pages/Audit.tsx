import { FC } from "react";
// import { FiPlus } from "react-icons/fi";
// import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";
import SearchInput from "../ui/SearchInput";
import DateComp from "../features/audit/DateComp";
import AuditTable from "../features/audit/AuditTable";

const Audit: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Audit Log</h1>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <DateComp />
        </div>

        <div className="flex gap-4">
          <OutlineButton>Export as</OutlineButton>
          <SearchInput width="w-full" />
        </div>
      </div>

      <AuditTable />
    </div>
  );
};

export default Audit;
