import { useRouter } from "next/router";

const Jombotron = () => {
  const router = useRouter();

  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Cats World</h1>
        <p className="lead">
          Find your new best friend today. Adopt a wonderful cat.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          Start looking
        </button>
      </div>
    </div>
  );
};

export default Jombotron;
