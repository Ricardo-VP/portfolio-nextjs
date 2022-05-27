import Layout from "../components/Layout";
import ErrorPage from "./_error";

const Github = ({ user, error }) => {
  if (error) {
    return <ErrorPage statusCode={error} />;
  }

  const { name, avatar_url, bio, html_url } = user;
  return (
    <Layout footer={false} dark={true}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name}</h1>
            <img src={avatar_url} alt="" className="img-fluid" />
            <p>{bio}</p>
            {/* <a
              className="btn btn-outline-secondary my-2"
              target="_blank"
              href={blog}
            >
              My Blog
            </a> */}
            <a
              className="btn btn-outline-secondary"
              href={html_url}
              target="_blank"
            >
              Go to GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  return await fetch("https://api.github.com/users/Ricardo-VP")
    .then(async (res) => {
      const user = await res.json();
      if (res.status !== 200) {
        return {
          props: {
            error: res.status,
          },
        };
      }
      return {
        props: {
          user: user,
        },
      };
    })
    .catch((error) => {
      return {
        props: {
          error,
        },
      };
    });
}

export default Github;
