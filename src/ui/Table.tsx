import { createContext, useContext, ReactNode } from "react";

// Define the types for the props
interface TableProps {
  columns: string; // CSS grid-template-columns value
  children: ReactNode;
}

interface RowProps {
  children: ReactNode;
}

interface BodyProps<T> {
  data: T[];
  render: (item: T) => ReactNode;
}

interface FooterProps {
  children: ReactNode;
}

// Table context to pass columns
const TableContext = createContext<{ columns: string }>({ columns: "" });

const Table: React.FC<TableProps> & {
  Header: React.FC<RowProps>;
  Row: React.FC<RowProps>;
  Body: <T>(props: BodyProps<T>) => JSX.Element;
  Footer: React.FC<FooterProps>;
} = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="border border-gray-200 rounded-lg w-full mx-auto"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};

// Header component
const Header: React.FC<RowProps> = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className={`grid ${columns} gap-6 items-center bg-gray-100 border-b border-gray-300 p-4 text-sm font-semibold uppercase tracking-wide text-gray-600  `}
    >
      {children}
    </header>
  );
};

// Row component
const Row: React.FC<RowProps> = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${columns} gap-6 items-center p-4 text-sm`}
    >
      {children}
    </div>
  );
};

// Body component
const Body = <T,>({ data, render }: BodyProps<T>): JSX.Element => {
  if (!data.length)
    return (
      <p className="text-center text-lg font-medium py-4">
        No data to show at the moment
      </p>
    );

  return <section>{data.map(render)}</section>;
};

// Footer component
const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-gray-100 p-4 flex justify-center">
      {children || null}
    </footer>
  );
};

// Compose components within Table
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
