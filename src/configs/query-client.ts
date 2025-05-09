import { QueryCache, type QueryClientConfig } from '@tanstack/react-query'
import get from 'lodash.get'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      retry: 0,
      staleTime: 5000,
      gcTime: 30000,
    },
    mutations: {
      retry: (failureCount, error) => {
        if (get(error, 'response.status') === 500 && failureCount < 2)
          return true
        return false
      },
      gcTime: 30000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => error,
  }),
}

export { queryClientConfig }
