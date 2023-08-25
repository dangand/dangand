"use client";

import React from "react";

import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast, ToastContainer } from "react-toastify";

function QueryClientProviders({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: { queries: { staleTime: 5000, retry: false } },
      mutationCache: new MutationCache({
        onError: (error: any) => {
          if (Array.isArray(error?.response?.data?.message)) {
            toast.error(error?.response?.data?.message[0]);
            return;
          } else if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message);
          } else {
            toast.error(error?.message);
          }
        },
      }),
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryClientProviders;
