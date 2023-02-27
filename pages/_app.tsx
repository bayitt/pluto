import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { theme } from "../theme";
import { wrapper } from "../store";
import { Footer } from "../components";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...props.pageProps} />
        <Footer />
        <Spinner size="md" position="fixed" bottom="10vh" right="50px" />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
