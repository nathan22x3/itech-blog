import Head from 'next/head';
import Link from 'next/link';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';
import { useState } from 'react';

const Home = ({ posts }) => {
  const [tags, setTags] = useState(() => [
    ...new Set(posts.map((post) => post.fields.tags).flat()),
  ]);

  return (
    <>
      <Head>
        <title>Trang chủ | ITECH Blog</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.newest}>
          <h2>Bài viết gần đây</h2>
          <div className={styles.newestList}>
            {posts.map((post) => (
              <PostCard key={post.sys.id} {...{ post }} />
            ))}
          </div>
        </section>
        <aside className={styles.highlight}>
          <h2>Chủ đề nổi bật</h2>
          <div className={styles.highlightList}>
            {tags.map((tag) => (
              <Link href='#' key={tag}>
                <a className={`nes-badge`}>
                  <span className={'is-error'}>{tag}</span>
                </a>
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
  });

  const { items } = await client.getEntries({ content_type: 'post' });

  return {
    props: { posts: items },
    revalidate: 1,
  };
};

export default Home;
