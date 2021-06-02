import Link from 'next/link';
import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  const { title, slug, shortDesc } = post.fields;

  return (
    <Link href={`/posts/${slug}`}>
      <a className={`${styles.container}`}>
        <h3 className={`${styles.title} title`}>{title}</h3>
        <p className={styles.shortDesc}>{shortDesc}</p>
        <span className={`${styles.readMore}`}>Đọc tiếp</span>
      </a>
    </Link>
  );
};

export default PostCard;
