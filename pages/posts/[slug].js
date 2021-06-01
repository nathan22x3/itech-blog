import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import Head from 'next/head';
import Link from 'next/link';
import slugify from 'slugify';
import CustomImage from '../../components/Custom/Image';
import PostSkeleton from '../../components/Skeleton/PostSkeleton';
import styles from '../../styles/Post.module.scss';

const Post = ({ post }) => {
  if (!post) return <PostSkeleton />;

  const { title, tags, content } = post.fields;

  const toc = content.content.filter((item) => item.nodeType === 'heading-2');

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node) => {
        const { value } = node.content[0];

        return <h2 id={slugify(value).toLowerCase()}>{value}</h2>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const {
          title,
          description,
          file: { url },
        } = node.data.target.fields;

        return (
          <CustomImage
            url={`https:${url}`}
            {...{ title }}
            {...{ description }}
            width={600}
          />
        );
      },
      [INLINES.HYPERLINK]: ({ content, data: { uri } }) => {
        const { value } = content[0];

        return (
          <Link href={uri} key={value}>
            <a className={'link'} target='_blank' rel='noopener noreferrer'>
              {value}
            </a>
          </Link>
        );
      },
    },
  };

  return (
    <>
      <Head>
        <title>{title} | ITECH Blog</title>
      </Head>
      <main className={styles.container}>
        <header className={styles.header}>
          {tags && <span className={styles.tags}>{tags?.join(', ')}</span>}
          <h1>{title}</h1>
        </header>
        <section className={styles.content}>
          {documentToReactComponents(content, options)}
        </section>
        <aside className={styles.sidebar}>
          <h3>Mục lục</h3>
          <ul className={styles.toc}>
            {toc.map((item) => {
              const { value } = item.content[0];

              return (
                <li key={value}>
                  <Link href={`#${slugify(value).toLowerCase()}`}>
                    <a className={'link'}>{value}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </main>
    </>
  );
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

export const getStaticPaths = async () => {
  const { items } = await client.getEntries({ content_type: 'post' });

  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
};

export default Post;
