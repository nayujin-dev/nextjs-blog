import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
/* By returning allPostsData inside the props object in getStaticProps, 
the blog posts will be passed to the Home component as a prop. */
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>저는 나유진입니다. next.js 정말루 어려워용 ㅎㅎ</p>
        <p>
          tutorial 따라가며 작성한 노션 페이지 링크입니다{' '}
          <a href="https://www.notion.so/tutorial-3fcd4cb5baa9428b97189f85ca56e614">(유진의 왕초보 노션</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title })=>(
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}