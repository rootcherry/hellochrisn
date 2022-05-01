import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

const Contact = ({ contactEmail, socialLinks }) => {
  return (
    <div>
      <section>
        <div className={utilStyles.contactContainer}>
          <Link href={`mailto:${contactEmail}`} >
            <a className={utilStyles.footerLink}><strong>Email</strong></a>
          </Link>
          <Link href={socialLinks[0].url}>
            <a className={utilStyles.footerLink}><strong>LinkedIn</strong></a>
          </Link>
          <Link href={socialLinks[1].url}>
            <a className={utilStyles.footerLink}><strong>GitHub</strong></a>
          </Link>
        </div>
      </section >
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} by Chris N.</p>
      </footer>
    </div >
  );
};

export default Contact;
