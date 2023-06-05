import { ComponentType, ReactNode } from "react";
import "../styles/globals.css";

type Props = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
