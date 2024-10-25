import { FC } from "react";
import { FiPlus } from "react-icons/fi";
import PrimaryButton from "../ui/PrimaryButton";
import OutlineButton from "../ui/OutlineButton";
import SearchInput from "../ui/SearchInput";
import AdminsTable from "../features/administrator/AdminsTable";

const Administrator: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Administrators Management</h1>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <PrimaryButton>
            <FiPlus />
            Add New Admin
          </PrimaryButton>
          <OutlineButton>Export As</OutlineButton>
        </div>

        <SearchInput />
      </div>

      <AdminsTable />
    </div>
  );
};

export default Administrator;
