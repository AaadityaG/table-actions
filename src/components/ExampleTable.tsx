import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ColumnDef, // Import MRT_ColumnDef for type safety
} from "material-react-table";

// Define a type for your data
interface Data {
  name: string;
  age: number;
}

// Sample data
const data: Data[] = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

export default function App() {
  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      {
        accessorKey: "name", // Recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, // Custom props
        Cell: ({ cell }) => <strong>{cell.getValue<string>()}</strong>, // Use generics
      },
      {
        accessorFn: (row) => row.age, // Alternate way
        id: "age", // ID required if you use accessorFn instead of accessorKey
        header: "Age" // Use span instead of i for styling
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
  });

  return <MaterialReactTable table={table} />;
}
