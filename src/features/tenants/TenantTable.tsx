import { FC } from "react";
import Table from "../../ui/Table";
import TenantRow from "./TenantRow";

const TenantTable: FC = () => {
  // const { bookings, isLoading, count } = useBookings();
  const tenants: [] = [];

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <div className="mt-8">
      <Table columns="grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr_0.5fr]">
        <Table.Header>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Tenant
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Admin Assigned
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Email
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Phone Number
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Status
          </div>
          <div className="text-gray-600 font-semibold uppercase text-lg text-center">
            Actions
          </div>
        </Table.Header>

        <Table.Body
          data={tenants}
          render={(tenant, i) => <TenantRow tenant={tenant} key={i} />}
        />

        {/* <Table.Footer>
        <Pagination count={count} />
      </Table.Footer> */}
      </Table>
    </div>
  );
};

export default TenantTable;
