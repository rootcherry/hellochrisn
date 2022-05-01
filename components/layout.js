import Head from 'next/head';

import Header from './header';
import CardList from './card-list';
import Contact from './contact';

import { data } from '../data/data';
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Chris N 💜";

const Layout = () => {
  return (
    <div className={utilStyles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content=""
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <title>Hello, I&apos;m Chris</title>
      </Head>
      
      <Header name={data.name} paragraph={data.paragraph} />

      <CardList data={data.projects} />

      <Contact contactEmail={data.contactEmail} socialLinks={data.social} />
    </div>
  );
};

export default Layout;
