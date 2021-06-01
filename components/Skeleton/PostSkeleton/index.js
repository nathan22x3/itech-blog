import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styles from './PostSkeleton.module.scss';

const PostSkeleton = () => {
  return (
    <SkeletonTheme color='#202020' highlightColor='#232425'>
      <main className={styles.container}>
        <header className={styles.header}>
          <Skeleton width={200} />
          <Skeleton width={400} />
        </header>
        <section className={styles.content}>
          <Skeleton width={200} />
          <Skeleton count={2} />
          <Skeleton height={200} />
          <Skeleton width={300} />
          <Skeleton count={4} />
        </section>
        <aside className={styles.sidebar}>
          <Skeleton width={100} />
          <Skeleton count={5} />
        </aside>
      </main>
    </SkeletonTheme>
  );
};

export default PostSkeleton;
