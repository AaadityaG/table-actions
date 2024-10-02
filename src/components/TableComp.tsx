import React, { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Input } from './ui/input';
import './style.css'

// Define your data type
interface TableData {
  strike: number;
  percent_in_out_money: number;
  percent_max_risk: number;
  percent_cost_to_insure: number;
  sigma_break_even: number;
  percent_to_dbl: number;
  prob_above: number;
  opt_mid_price: number;
  percent_ask_time_value: number;
  delta: number;
  opt_open_int: number;
  black_scholes_ratio_siv: number;
  black_scholes_ratio_50_day: number;
  iv_hv: number;
  percent_bid_ask_spread: number;
  percent_return_1_sigma_max_risk: number;
}

// Sample data fetching function (replace with your data fetching logic)
const fetchData = async (): Promise<TableData[]> => {
  const response = await fetch('https://frontendassignment-algo-one.netlify.app/table_data');
  const result = await response.json();
  return result;
};

const TableComp: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [rowCount, setRowCount] = useState(10); // Default to 10 rows

  // Fetch table data on mount
  useEffect(() => {
    const fetchTableData = async () => {
      const tableData = await fetchData();
      setData(tableData);
    };
    fetchTableData();
  }, []);

  const columns = useMemo<MRT_ColumnDef<TableData>[]>(
    () => [
      { accessorKey: 'strike', header: 'Strike' },
      { accessorKey: 'percent_in_out_money', header: '% In/Out Money', 
        muiTableBodyCellProps: ({ row }) => {
            const moneyValue = row.original.percent_in_out_money;
            return {
              style: {
                backgroundColor: moneyValue > 0 ? '#ffe0b1' : '#fffbd6',
                textAlign: 'end', // Align text to end
                fontWeight: '700 !important', // Make text bold
                fontFamily: 'monospace', // Set font family
                fontSize: "18px",
                color: "#71272a"
              },
            };
          },
       },
      { accessorKey: 'percent_max_risk', header: '% Max Risk' },
      { accessorKey: 'percent_cost_to_insure', header: '% Cost To Insure' },
      { accessorKey: 'sigma_break_even', header: 'Sigma Break Even' },
      { accessorKey: 'percent_to_dbl', header: '% To Dbl' },
      { accessorKey: 'prob_above', header: 'Prob Above' },
      { accessorKey: 'opt_mid_price', header: 'Opt Mid Price' },
      { accessorKey: 'percent_ask_time_value', header: '% Ask Time Value' },
      { accessorKey: 'delta', header: 'Delta' },
      { accessorKey: 'opt_open_int', header: 'Opt Open Int' },
      { accessorKey: 'black_scholes_ratio_siv', header: 'Black Scholes Ratio (SIV)' },
      { accessorKey: 'black_scholes_ratio_50_day', header: 'Black Scholes Ratio (50 Day)' },
      { accessorKey: 'iv_hv', header: 'IV/HV' },
      { accessorKey: 'percent_bid_ask_spread', header: '% BA Spread' },
    //   { accessorKey: 'percent_return_1_sigma_max_risk', header: '% Return / % Max Risk' },
    {
        accessorKey: 'percent_return_1_sigma_max_risk',
        header: '% Return / % Max Risk',
        // Customize cell with a horizontal bar
        Cell: ({ row }) => {
          const value = row.original.percent_return_1_sigma_max_risk;
      
          // Define colors based on value ranges
          const getBarColor = (val: number) => {
            if (val > 6.5) return '#a6f5bc';
            if (val > 1) return '#ffe37a';
            return '#ffa0a0';
          };
      
          return (
            <div style={{ position: 'relative', width: '100%', height: '100%', padding: '0', margin: '0', boxSizing: 'border-box' }}>
              {/* Horizontal bar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%', // Full height of the cell
                  width: `${value * 12}px`, // Bar width proportional to the value
                  backgroundColor: getBarColor(value),
                  borderRadius: '4px',
                  zIndex: 1, // Ensure the bar is behind the text
                }}
              />
              {/* Value text */}
              <span
                style={{
                  position: 'relative',
                  zIndex: 2, // Text is on top of the bar
                  padding: '0 8px',
                  fontWeight: 'bold', // Bold font for clarity
                  display: 'inline-block',
                  lineHeight: '10px', // Align text vertically
                }}
              >
                {value.toFixed(2)}%
              </span>
            </div>
          );
        },
      }
      
    ],
    [],
  );

  
  const table = useMaterialReactTable({
    columns,
    data: data.slice(0, rowCount), // Limit the data to the selected row count
    initialState: { showColumnFilters: true, density: 'compact', sorting: [{ id: 'strike', desc: false }] },
    enablePagination: false,
    enableFullScreenToggle: false,
    enableColumnResizing: false,
    enableStickyHeader: true,
    enableDensityToggle: false,
    enableGlobalFilter: false,
    enableHiding: false,


    muiTableContainerProps: { sx: { maxHeight: '450px', borderRadius: "5px" } },
    muiTableBodyCellProps: {
        
        sx: {
          borderLeft: '1px solid gray',
          fontWeight: '700 !important',
          fontFamily: 'monospace',
          fontSize: "18px",
          textAlign: 'right', // Changed to 'right' for clarity
          padding: '8px', // Added padding for better spacing
          '&:last-child': {
            borderRight: '1px solid gray', // Optional: add right border for the last cell
          },
        },
      },
      
    renderTopToolbarCustomActions: () => (
        <p  style={{ fontWeight: '600', color: "black", fontSize: "30px",  }}>
          Apple Inc. (AAPL) $214.29 <span className='text-[#992727] font-mono'>($ -2.38) -1.1%</span>
        </p>
      ),
    muiTableHeadCellProps: {
    sx: {
        borderLeft: '1px solid gray',
        backgroundColor: "#161e30",
        color: "#ffffff !important",
        textAlign: "center",
        padding: "10px",
        paddingTop:"60px",
        fontSize: "18px",
        whiteSpace: "normal",  // Allow text to wrap normally
        wordBreak: "break-word",
        paddingBottom:"20px",
        height: "100px", // Increased height for vertical text
        width: "30px",
        '& .MuiTableSortLabel-root': {
          color: "#ffffff !important",
          '&.Mui-active': {
            color: "#ffffff !important",
          },
          '& .MuiSvgIcon-root': {
            color: "#ffffff !important",
          },
          '&:hover': {
            color: "#ffffff !important",
            '& .MuiSvgIcon-root': {
              color: "#ffffff !important",
            },
          },
        },
        '& .MuiInputBase-root': {
          color: "#ffffff !important",
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff !important',
          },
        },
        '& .MuiIconButton-root': {
          color: "#ffffff !important",
        },
      },
    },
    enableColumnFilters: true,
  });

  // Handle input change for the slider
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRowCount(value);
  };

  return (
    <div>
      <div style={{ fontSize: '15px' }}>Filter Results</div>
        <div className='flex items-center justify-start'>
        <span>0</span>
        <Input
          min={0}
          max={30} // Maximum is the length of the fetched data
          type="range"
          value={rowCount}
          onChange={handleInputChange}
          aria-labelledby="aria-labelledby"
          style={{ width: 130, margin: '20px 12px', }}
          className='customeCSS'
        />
        <span >30</span> {/* Show total data count */}
        </div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default TableComp;
