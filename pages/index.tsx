import Container from '../components/container'
import Posts from '../components/posts'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { TITLE } from '../lib/constants'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <Container>
          <Intro />
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const fields = ['title', 'date', 'slug', 'excerpt', 'tag']
  const allPosts = getAllPosts(fields)

  return {
    props: { allPosts },
  }
}
