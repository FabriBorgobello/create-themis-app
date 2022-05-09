import Error from "next/error";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "@components/ErrorFallback/ErrorFallback";

import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Error handling
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.description}
      />
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
