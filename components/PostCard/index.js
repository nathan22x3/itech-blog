import Link from 'next/link';
import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  const { title, slug } = post.fields;

  return (
    <Link href={`/posts/${slug}`}>
      <a className={`${styles.container} nes-container with-title`}>
        <p className={`${styles.title} title`}>{title}</p>
        <p className={styles.briefContent}>
          Các bạn đã bao giờ "tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt,
          nước mắt đầm đìa" chỉ để tìm ra "hung thủ" đã làm cho dự án đang chạy
          ngon lành của bạn trở thành một mớ hỗn độn mà đến bạn cũng không hiểu
          là gì chưa Vậy là do bạn không chơi đồ... ý nhầm, vậy là bạn chưa biết
          đến Git rồi đó bạn ơi!
        </p>
        <span className={`${styles.readMore} link`}>Đọc tiếp...</span>
      </a>
    </Link>
  );
};

export default PostCard;
