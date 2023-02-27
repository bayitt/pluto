import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { wrapper } from "../store";
import { Footer, Spinner } from "../components";

function MyApp({ Component, ...rest }: AppProps) {
  const [routeChanged, setRouteChanged] = useState(false);
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setRouteChanged(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setRouteChanged(false);
    });

    Router.events.on("routeChangeError", () => {
      setRouteChanged(false);
    });
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...props.pageProps} />
        <Footer />
        {routeChanged && <Spinner />}
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
