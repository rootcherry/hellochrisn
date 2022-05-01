import Link from "next/link";
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';

const Card = ({ title, imgSrc, tech, short, git, url }) => {
  return (
    <div>
      <section>
        <p className={utilStyles.projectTitle}><strong>{title}</strong></p>
        <div className={utilStyles.projectBox}>
          <Image className={utilStyles.projectImg}
            src={imgSrc}
            width={300}
            height={300}
            alt={title}
          />
        </div>
        <p className={utilStyles.projectText}>{short} 🚀 with {tech}</p>
        <Link href={`${git}`}>
          <a className={utilStyles.projectLink}><strong>Git</strong></a>
        </Link>
        <Link href={`${url}`}>
          <a className={utilStyles.projectLink}><strong>Live</strong></a>
        </Link>
      </section>
    </div>
  );
};

export default Card;
