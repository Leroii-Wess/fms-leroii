import { FC } from "react";
import Filter from "../../ui/Filter";
import { MdOutlinePendingActions } from "react-icons/md";
import { HiOutlineExclamationCircle, HiOutlineFlag } from "react-icons/hi2";

const DashboardTableOperations: FC = () => {
  return (
    <div>
      <Filter
        filterField="status"
        options={[
          {
            value: "all",
            label: "Total Flagged Transactions",
            icon: <HiOutlineFlag />,
          },
          {
            value: "pending",
            label: "Pending Cases",
            icon: <MdOutlinePendingActions />,
          },
          {
            value: "alerts",
            label: "Recent Alerts",
            icon: <HiOutlineExclamationCircle />,
          },
        ]}
      />
    </div>
  );
};

export default DashboardTableOperations;
