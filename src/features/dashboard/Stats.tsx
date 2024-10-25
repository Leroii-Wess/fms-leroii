import { FC } from "react";
import Stat from "./Stat";
import { BsBoxFill } from "react-icons/bs";
import { IoPeople, IoCreate } from "react-icons/io5";
import { RiLineChartLine } from "react-icons/ri";

/* Define the props for the Stat component */
// interface StatProps {
//   icon: React.ReactNode;
//   title: string;
//   value: string | number;
//   color: 'red' | 'green' | 'blue' | 'yellow' | 'gray'; // Add other colors as needed
// }

const Stats: FC = () => {
  return (
    <>
      <Stat
        title="Total Tenants Created"
        color="yellow"
        icon={<BsBoxFill />}
        value={145}
      />
      <Stat
        title="Total Admin Created"
        color="blue"
        icon={<IoPeople />}
        value={28}
      />
      <Stat
        title="Total Active Users"
        color="green"
        icon={<RiLineChartLine />}
        value={207}
      />
      <Stat
        title="Average Account Created Per Day"
        color="red"
        icon={<IoCreate />}
        value={145}
      />
    </>
  );
};

export default Stats;
