import Image from "next/image";
import styles from './blog-image.module.css';
import {BASE_URL} from "../../data/config";

const BlogImage = (props) => {

    const {title, picture} = props;

    return(
      <div className={styles.image}>
          <Image src={BASE_URL + picture.url} alt={title} layout={"fill"} />
      </div>
    );

};

export default BlogImage;