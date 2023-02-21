import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { wrapper } from "../store";
import { Footer, Nav } from "../components";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Nav />
        <Component {...props.pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
