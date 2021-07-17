import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ICustomQueryClientProvider {
  children?: React.ReactNode;
}

export const CustomQueryClientProvider: React.FC<ICustomQueryClientProvider> = (
  props
) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </>
  );
};
