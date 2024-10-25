// import BookingRow from "./BookingRow";
// import Table from "../../ui/Table";
// import Menus from "../../ui/Menus";
// import Empty from "../../ui/Empty";
// import { useBookings } from "./useBookings";
// import Spinner from "../../ui/Spinner";
// import Pagination from "../../ui/Pagination";

import Table from "../../ui/Table";

function DashboardTable() {
  // const { bookings, isLoading, count } = useBookings();
  const bookings: [] = [];

  // if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <div className="mt-8">
      <Table columns="grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr]">
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
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        {/* <Table.Footer>
        <Pagination count={count} />
      </Table.Footer> */}
      </Table>
    </div>
  );
}

export default DashboardTable;
