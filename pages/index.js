import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          My name is Sally Resch and I live in Södertälje, Sweden. Since the autumn of 2023 I have graduated as a Java developer.
          I have had my internships at SEB and Elevateyourself AB.
          At Elevateyourself AB I worked together with 3 other students and had responsability of creating <Link href="https://heyey.se">Heyey</Link> and <Link href="https://elevateyourself.se">Elevateyourself </Link>website
        </p>

        <p>
          Reach out:
          <Link href="https://www.linkedin.com/in/sally-resch/"> LinkedIn </Link>
          or
          <Link href="mailto:sallyresch27@gmail.com"> Email me </Link>
        </p>

        <p>
          I have previously worked both as a manager in a kitchen and in food production but also as a chef and baker. These experiences has given me the opportunity to develop my problemsolving skills and also made me aware of the importance of teamwork.
          As a person, I am a curious, observant quality-driven team player who is passionate about clear communication within the working group. I am attracted to innovation and I am confident of driving it forward together.
          To relax I play dungeons and dragons with friends, workout and experiment with food.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Fetching external data (from the file system)  and pre-rendered the index page with this data*/}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
