import { getAllPostIds, getPostById } from "../../lib/posts";
import { format } from "date-fns";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description || ""} />
      </Head>

      <article className="post">
        <header className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-date">
            {format(new Date(postData.date), "MM/dd/yyyy")}
          </div>
        </header>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        <div className="back-link">
          <a href="/">← Back to all posts</a>
        </div>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostById(params.id);
  return {
    props: {
      postData,
    },
  };
}
