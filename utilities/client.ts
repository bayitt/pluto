import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createClient = () =>
  new ApolloClient({
    uri: process.env.NEXT_APP_NOIR_URL as string,
    cache: new InMemoryCache(),
  });
