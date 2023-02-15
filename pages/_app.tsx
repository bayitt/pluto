import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { wrapper } from "../store";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...props.pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
