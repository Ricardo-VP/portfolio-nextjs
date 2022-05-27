import Layout from "../components/Layout";
import { posts } from "../profile";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="col-md-4 my-2">
    <div className="card">
      <div className="overflow">
        <img src={post.imgURL} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn btn-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} dark title={"My Blog"}>
    <div className="row">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  </Layout>
);

export default Blog;
