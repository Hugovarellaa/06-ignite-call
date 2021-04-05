import { styled } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',

  display: 'flex',
  alignItems: 'center',

  gap: '$20',
  overflow: 'hidden',
})

export const Hero = styled('div', {})

export const Preview = styled('div', {})
