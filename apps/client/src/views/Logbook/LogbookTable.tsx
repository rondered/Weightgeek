import React from "react";

interface ILogbookTable {
  data: Array<any>;
}

export const LogbookTable: React.FC<ILogbookTable> = (props) => {
  return (
    <table className="table-fixed text-center w-full">
      <thead className="border-b-2 pt-2">
        <tr className="">
          <th className="w-1/3 p-2">Date</th>
          <th className="w-1/3 p-2">Weight</th>
          <th className="w-1/3 p-2">Calories</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr className="font-light h-[40px] hover:(bg-gray-50)">
            <td>{item.date}</td>
            <td>{item.weight}</td>
            <td>{item.calories}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
