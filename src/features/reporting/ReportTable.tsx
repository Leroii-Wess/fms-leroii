import { FC } from "react";
import Table from "../../ui/Table";
import ReportRow from "./ReportRow";

const ReportTable: FC = () => {
  // const { bookings, isLoading, count } = useBookings();
  const report: [] = [];

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <div className="mt-8">
      <Table columns="grid-cols-[1fr_1.5fr_1.5fr_2fr_1fr]">
        <Table.Header>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Date
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Login Time
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Tenants
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Comments
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Status
          </div>
        </Table.Header>

        <Table.Body
          data={report}
          render={(tenant, i) => <ReportRow report={report} key={i} />}
        />

        {/* <Table.Footer>
        <Pagination count={count} />
      </Table.Footer> */}
      </Table>
    </div>
  );
};

export default ReportTable;
