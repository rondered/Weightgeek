import React from "react";
import {useTable} from "react-table";

interface ITable {
  columns: any;
  data: any;
}

export const Table: React.FC<ITable> = (props) => {
  const {columns, data} = props;

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({
      columns,
      data,
    });

  const [selectedRow, setSelectedRow] = React.useState<number>();

  return (
    <div className="card p-3">
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="table-header" {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="transition-all duration-500 hover:(bg-primaryColor) bg-bgColor"
                onClick={() => {
                  setSelectedRow(row.index);
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
