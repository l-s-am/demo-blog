import { getAllPosts } from "../lib/posts";
import { format } from "date-fns";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Daily Blog</title>
        <meta name="description" content="A blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="main-title">bumiing's rants</h1>

        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <span className="post-date">
                {format(new Date(post.date), "MM/dd/yyyy")}
              </span>
              <a href={`/posts/${post.id}`} className="post-title">
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
