import Link from 'next/link';
import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  const { title, slug, shortDesc } = post.fields;

  return (
    <Link href={`/posts/${slug}`}>
      <a className={`${styles.container}`}>
        <h2 className={`${styles.title} title`}>{title}</h2>
        <p className={styles.shortDesc}>{shortDesc}</p>
        <span className={`${styles.readMore}`}>Đọc tiếp</span>
      </a>
    </Link>
  );
};

export default PostCard;
