import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CustomImage from '../components/Custom/Image';
import styles from '../styles/NotFound.module.scss';

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  useEffect(() => {
    setTimeout(() => router.push('/'), 10000);
  }, []);

  return (
    <>
      <Head>
        <title>Không tìm thấy trang | ITECH Blog</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.message}>Không tìm thấy trang!</h1>
        <div className={styles.content}>
          <span>
            Có vẻ như trang bạn tìm không tồn tại.
            <br />
            Bạn có thể xem lại đường dẫn đã đúng chưa nhé!
          </span>
          <span className={styles.countdown}>
            Quay về trang chủ sau {countdown} giây
          </span>
          <Link href='/'>
            <a className={'link'}>&#10229; Quay về trang chủ</a>
          </Link>
        </div>
        <div className={styles.illustrator}>
          <span>404</span>
          <CustomImage url='/images/404.svg' />
        </div>
      </div>
    </>
  );
};

export default NotFound;
