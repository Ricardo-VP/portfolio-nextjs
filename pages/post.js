import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();
  console.log(router.query.title);

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  console.log(currentPost);

  return (
    <Layout footer={false} title={currentPost.title}>
      <div className="text-center">
        <img
          src={currentPost.imgURL}
          alt=""
          className="img-fluid"
          width={360}
        />
        <h3>{currentPost.content}</h3>
      </div>
    </Layout>
  );
};

export default Post;
