import Image from 'next/image';

import utilStyles from '../styles/utils.module.css';

const Header = ({ name, paragraph }) => {
  return (
    <div className={utilStyles.header}>
      <header>
        <Image
          className={utilStyles.headerImg}
          src="/images/coffee.jpg"
          height={144}
          width={144}
          alt={name}
        />
        <div className={utilStyles.headerTextBox}>
          <h1>{name}</h1>
          <p className={utilStyles.headerText}>{paragraph}</p>
        </div>
      </header>
    </div>
  )
};

export default Header;
