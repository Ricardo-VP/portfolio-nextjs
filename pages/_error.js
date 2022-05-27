import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      {statusCode ? (
        <p className="text-center">{statusCode} - Could not load this page</p>
      ) : (
        <p>Could not load this page</p>
      )}
    </Layout>
  );
};

export default _error;
