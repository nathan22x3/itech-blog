import Image from 'next/image';
import styles from './CustomImage.module.scss';

const CustomImage = ({ url, title, description, width }) => {
  return (
    <div className={styles.container} style={{ width: width || '100%' }}>
      <Image
        className={styles.image}
        src={url}
        alt={title}
        title={title}
        layout='fill'
      />
      <span className={styles.caption}>{description || title}</span>
    </div>
  );
};

export default CustomImage;
