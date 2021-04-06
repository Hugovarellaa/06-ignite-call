/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form>
      {/* @ts-ignore */}
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button type="submit" size="sm">
        Criar conta com Google
        <ArrowRight />
      </Button>
    </Form>
  )
}
