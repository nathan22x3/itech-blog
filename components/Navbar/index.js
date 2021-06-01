import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/'>
        <a className={styles.item}>
          <Image src='/images/logo.png' width={230} height={33} />
        </a>
      </Link>
      <Link href='/posts'>
        <a className={styles.item}>Bài viết gần đây</a>
      </Link>
      <Link href='/categories'>
        <a className={styles.item}>Chủ đề</a>
      </Link>
    </nav>
  );
};

export default Navbar;
