import {useQuery} from "react-query";
import {Log} from "@/types";
import {getLog} from "@/endpoints/log";

export const useGetLogs = () => {
  const {isLoading, data} = useQuery<Log[], Error>(getLog.name, getLog);

  return {isLoading, data};
};
