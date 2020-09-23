import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Doctor Dashboard</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </Container>
  )
}

export default Home
