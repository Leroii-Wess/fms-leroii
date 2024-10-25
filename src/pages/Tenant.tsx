import { FC } from "react";
import { FiPlus } from "react-icons/fi";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";
import SearchInput from "../ui/SearchInput";
import TenantTable from "../features/tenants/TenantTable";

const Tenant: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Tenant Management</h1>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <PrimaryButton>
            <FiPlus />
            Add New Tenant
          </PrimaryButton>
          <OutlineButton>Export As</OutlineButton>
        </div>

        <SearchInput />
      </div>

      <TenantTable />
    </div>
  );
};

export default Tenant;
