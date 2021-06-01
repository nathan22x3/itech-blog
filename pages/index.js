import Head from 'next/head';
import Link from 'next/link';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';

const Home = ({ posts }) => {
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
            <Link href='#'>
              <a className={`nes-badge`}>
                <span className={'is-error'}>Today I Learned</span>
              </a>
            </Link>
            <Link href='#'>
              <a className={`nes-badge`}>
                <span className={'is-error'}>Git</span>
              </a>
            </Link>
            <Link href='#'>
              <a className={`nes-badge`}>
                <span className={'is-error'}>Big Data</span>
              </a>
            </Link>
            <Link href='#'>
              <a className={`nes-badge`}>
                <span className={'is-error'}>Cryptography</span>
              </a>
            </Link>
            <Link href='#'>
              <a className={`nes-badge`}>
                <span className={'is-error'}>Artificial Intelligence</span>
              </a>
            </Link>
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
