import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [timer, setTimer] = useState(10);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  useEffect(() => {
    setTimeout(() => router.push('/'), 10000);
  }, []);

  return (
    <>
      <Head>
        <title>Không tìm thấy trang | ITECH Blog</title>
      </Head>
      <div>
        <div>
          <h1>Không tìm thấy trang</h1>
          <p>Có vẻ như trang bạn tìm không tồn tại.</p>
          <p>Bạn có thể xem lại đường dẫn đã đúng chưa nhé.</p>
          <p>Quay về trang chủ sau {timer} giây</p>
          <Link href='/'>
            <a>Quay về trang chủ</a>
          </Link>
        </div>
        <div>404</div>
      </div>
    </>
  );
};

export default NotFound;
