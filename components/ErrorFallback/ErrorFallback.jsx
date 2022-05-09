import styles from "./ErrorFallback.module.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className={styles.container}>
      <p className={styles.title}>Something went wrong:</p>
      <code className={styles.errorMessage}>{error.message}</code>
      <button onClick={resetErrorBoundary} className={styles.tryAgain}>
        Try again
      </button>
      <p className={styles.editInfo}>
        Edit this component on <code>@components/ErrorFallback.jsx</code>
      </p>
    </div>
  );
};

export default ErrorFallback;
