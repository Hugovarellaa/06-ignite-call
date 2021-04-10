import { Heading, Text } from '@ignite-ui/react'
import Head from 'next/head'
import Image from 'next/image'

import previewImage from '../../assets/calendar.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Container>
          <Hero>
            <Heading size="4xl">Agendamento descomplicado</Heading>
            <Text size="lg">
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </Text>

            <ClaimUsernameForm />
          </Hero>

          <Preview>
            <Image
              src={previewImage}
              alt="Calendário"
              quality={100}
              height={400}
              priority
            />
          </Preview>
        </Container>
      </div>
    </>
  )
}
