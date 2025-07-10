import { QueryClient } from '@tanstack/react-query';

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      retry: 1,
      retryDelay: 1000,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 1,
      retryDelay: 1000
    }
  }
});
