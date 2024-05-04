import React from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "react-query";

// PROVIDERS and THEME Config
function ReactQueryConfig({ children, pageProps }) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.state.data !== undefined) {
          // alert
        }
        // console.log(error);
      },
    }),
    defaultOptions: {
      queries: {
        retry: 0,
        // refetchOnReconnect: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default ReactQueryConfig;
