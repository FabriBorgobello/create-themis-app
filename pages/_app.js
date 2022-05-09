import "@styles/globals.css";
import Error from "next/error";

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

  return <Component {...pageProps} />;
}

export default MyApp;
