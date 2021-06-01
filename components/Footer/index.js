import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>&copy;2021-present</span>{' '}
        <Link href='//facebook.com/nathan22x3'>
          <a className={'link'} target='_blank' rel='noopener noreferrer'>
            nathan22x3
          </a>
        </Link>
        . Make with love ❤️
      </p>
    </footer>
  );
};

export default Footer;
