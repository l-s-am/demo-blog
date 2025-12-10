import { getAllPosts } from "../lib/posts";
import { format, parseISO } from "date-fns";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Ellis' Blog</title>
        <meta name="description" content="A blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="main-title">Ellis' Blog</h1>

        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <span className="post-date">
                {format(parseISO(post.date), "MM/dd/yyyy")}
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
