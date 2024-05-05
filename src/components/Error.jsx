import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops...! </h1>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
