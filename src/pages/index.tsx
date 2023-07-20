import { Text } from '@ignite-ui/react'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call Home</title>
        <meta name="description" content="Ignite Call" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

     <div>
      <Text>Hello World</Text>
     </div>
    </>
  )
}
