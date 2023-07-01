/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => signIn('google')}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao conectar ao Google, verifique se voce habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}

        <Button
          type="submit"
          disabled={!isSignIn}
          onClick={handleConnectCalendar}
        >
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
