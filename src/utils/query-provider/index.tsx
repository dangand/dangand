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
          if (typeof error?.response?.data?.message === "object") {
            toast.error(error.response.data.message);
            return;
          }
          toast.error(error?.response?.data?.message | error?.message);
        },
      }),
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryClientProviders;
