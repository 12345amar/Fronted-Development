import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { data, error, status, statusText  } = useRouteError();
 

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{status}{' '}{error.message}</i>
      </p>
    </div>
  );
}