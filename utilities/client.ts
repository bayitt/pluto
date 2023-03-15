import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createClient = () =>
  new ApolloClient({
    uri:
      (process.env.NEXT_PUBLIC_NOIR_URL as string) ??
      window.__env__.NEXT_PUBLIC_NOIR_URL,
    cache: new InMemoryCache(),
  });
