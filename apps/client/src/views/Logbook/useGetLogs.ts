import {useQuery} from "react-query";
import React from "react";
import {Log} from "@/types";
import {getLog} from "@/endpoints/log";

export const useGetLogs = () => {
  const {isLoading, data} = useQuery<Log[], Error>(getLog.name, getLog);

  const columns = React.useMemo(
    () => [
      {
        Header: "Weight",
        accessor: "weight",
      },
      {
        Header: "Calories",
        accessor: "calories",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  return {isLoading, data, columns};
};
