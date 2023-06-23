import { useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="">
      <h1>Error</h1>
      <h2>{error.data}</h2>
      <h2>
        {error.statusText}:{error.status}
      </h2>
    </div>
  );
};

export default ErrorComponent;
